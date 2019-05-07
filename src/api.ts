import { createCursor } from './helpers/cursor';

interface Options {
  logs?: boolean;
  speed?: 'NORMAL' | 'FAST';
}

type Story = () => Promise<void>;

const defaultOptions: Options = {
  logs: false,
  speed: 'NORMAL',
};

const initialize = ({ speed }: Options) => {
  createCursor({
    transitionDuration: speed === 'FAST' ? '0.1s' : '0.5s',
  });
};

export const runStories = async (stories: Story[], options?: Partial<Options>): Promise<void> => {
  options = {
    ...defaultOptions,
    ...options,
  };

  initialize(options);

  for (const story of stories) {
    if (options.logs) {
      console.log(`[automatador] Running story "${story.name}"`);
    }

    await story();
  }
};
