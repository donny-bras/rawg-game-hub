import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();

  if (!id) return;

  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
