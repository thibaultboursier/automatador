import { createCursor, deleteCursor } from './helpers/cursor';

interface Options {
  cursorSource?: string;
  deleteCursorWhenFinished?: boolean;
  logs?: boolean;
  speed?: 'NORMAL' | 'FAST';
}

type Story = () => Promise<void>;

const defaultOptions: Options = {
  deleteCursorWhenFinished: false,
  logs: false,
  speed: 'NORMAL',
};

const initialize = ({ cursorSource, speed }: Options) => {
  createCursor({
    ...(cursorSource ? { source: cursorSource } : {}),
    transitionDuration: speed === 'FAST' ? '0.1s' : '0.5s',
  });
};

export const runStories = async (stories: Story[], options?: Partial<Options>): Promise<void> => {
  const mergedOptions: Options = {
    ...defaultOptions,
    ...options,
  };

  initialize(mergedOptions);

  for (const story of stories) {
    if (mergedOptions.logs) {
      console.log(`[automatador] Running story "${story.name}"`);
    }

    await story();
  }

  if (mergedOptions.deleteCursorWhenFinished) {
    deleteCursor();
  }
};
