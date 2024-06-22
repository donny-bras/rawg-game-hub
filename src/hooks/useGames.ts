import { useEffect, useState } from "react";

import { CanceledError } from "axios";
import axios from "../services/api-client";

export type Platform = {
  id: number;
  slug: string;
};

export type Game = {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

type FetchGamesResponse = {
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    setError("");

    axios
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(({ data }) => {
        setGames(data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(`Error loading games: ${err.message}`);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
