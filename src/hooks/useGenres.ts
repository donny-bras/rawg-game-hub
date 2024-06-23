import { State } from "./useData";
import genres from "../data/genres";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () =>
  ({ data: genres, status: "success", error: "" } as State<Genre>);

// const useGenres = () => useData<Genre>("/genres");

export default useGenres;
