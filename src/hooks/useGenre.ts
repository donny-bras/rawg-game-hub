import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  if (!id) return;

  const { data: genres } = useGenres();

  return genres?.results.find((p) => p.id === id);
};

export default useGenre;
