import { useEffect, useState } from "react";

import axios from "../services/api-client";

type Game = {
  id: string;
  name: string;
  image_background: string;
};

type FetchGamesResponse = {
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get<FetchGamesResponse>("/games")
      .then(({ data }) => {
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { games, error, isLoading };
};

export default useGames;
