import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { id } = useParams();

  return <div>Game Details {id}</div>;
};

export default GameDetailsPage;
