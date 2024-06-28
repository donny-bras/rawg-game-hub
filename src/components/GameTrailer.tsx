import useTrailers from "../hooks/useTrailers";

type GameTrailerProps = {
  gameId: number;
};

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, error } = useTrailers(gameId);

  if (error) throw error;

  const trailer = data?.results[0];

  return trailer ? (
    <video
      src={trailer.data[480]}
      poster={trailer.preview}
      controls
      width={"100%"}
    />
  ) : null;
};

export default GameTrailer;
