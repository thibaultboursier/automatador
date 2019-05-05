import { createCursor } from './helpers/cursor';

interface Options {
  logs?: boolean;
}

type Story = () => Promise<void>;

const initialize = () => {
  createCursor();
};

export const runStories = async (stories: Story[], options: Options = {}): Promise<void> => {
  initialize();

  for (const story of stories) {
    if (options.logs) {
      console.log(`[automatador] Running story "${story.name}"`);
    }

    await story();
  }
};
