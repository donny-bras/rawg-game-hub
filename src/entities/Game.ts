import { Platform } from "./Platform";

export type Game = {
  id: string;
  name: string;
  slug: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

export type GameDetails = {
  id: string;
  name: string;
  description_raw: string;
  slug: string;
};
