import { createCursor } from "./helpers/cursor";

interface Options {
  logs?: boolean;
}

type Story = () => Promise<void>;

export const runStories = async (stories: Story[], options: Options = {}) => {
  initialize();

  for (const story of stories) {
    if (options.logs) {
      console.log("running story " + story.name);
    }

    await story();
  }
};

const initialize = () => {
  createCursor();
};
