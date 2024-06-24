import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { FetchResponse } from "./useData";
import axios from "../services/api-client";
import genres from "../data/genres";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = (): UseQueryResult<Genre[]> =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      axios
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

// const useGenres = () =>
//   ({ data: genres, status: "success", error: "" } as State<Genre>);

// const useGenres = () => useData<Genre>("/genres");

export default useGenres;
