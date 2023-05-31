import loadingPlugin from "@rematch/loading";
import { init } from "@rematch/core";
import { newsSlice } from "./news/newsSlice";

const store = init({
  models: {
    newsSlice,
  },
  plugins: [loadingPlugin({ type: "full" })],
});

export default store;
