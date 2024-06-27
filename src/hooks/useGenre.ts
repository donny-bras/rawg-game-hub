import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();

  if (!id) return;

  return genres?.results.find((p) => p.id === id);
};

export default useGenre;
