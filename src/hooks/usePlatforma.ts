import { Platform } from "./useGames";
import { State } from "./useData";
import platforms from "../data/platforms";

const usePlatforms = () =>
  ({ data: platforms, status: "success", error: "" } as State<Platform>);

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
