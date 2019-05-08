import { createCursor, deleteCursor } from './helpers/cursor';

interface Options {
  cursorSource?: string;
  deleteCursorWhenFinished?: boolean;
  logs?: boolean;
  speed?: 'NORMAL' | 'FAST';
}

type Status = 'READY' | 'RUNNING';

type Story = () => Promise<void>;

const defaultOptions: Options = {
  deleteCursorWhenFinished: false,
  logs: false,
  speed: 'NORMAL',
};

let status: Status = 'READY';

const initialize = ({ cursorSource, speed }: Options) => {
  status = 'RUNNING';

  createCursor({
    ...(cursorSource ? { source: cursorSource } : {}),
    transitionDuration: speed === 'FAST' ? '0.1s' : '0.5s',
  });
};

export const isRunning = (): boolean => status === 'RUNNING';

export const runStories = async (stories: Story[], options?: Partial<Options>): Promise<void> => {
  const mergedOptions: Options = {
    ...defaultOptions,
    ...options,
  };

  if (isRunning()) {
    throw new Error('Already running');
  }

  initialize(mergedOptions);

  for (const story of stories) {
    await runStory(story, mergedOptions);
  }

  await terminate(mergedOptions);
};

const runStory = async (story: Story, { logs }: Options) => {
  const name = story.name || 'untitled';

  logs && console.log(`[automatador] Story "${name}" is running`);

  const startTime = performance.now();
  await story();
  const endTime = performance.now();
  const timeInMS = Math.round(endTime - startTime);

  logs && console.log(`[automatador] Story "${name}" is finished (${timeInMS} milliseconds)`);
};

const terminate = async ({ deleteCursorWhenFinished }: Options): Promise<void> => {
  if (deleteCursorWhenFinished) {
    await deleteCursor();
  }

  status = 'READY';
};
