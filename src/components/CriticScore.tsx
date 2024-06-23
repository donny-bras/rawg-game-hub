import { Badge } from "@chakra-ui/react";

type CriticScoreProps = {
  score: number | null;
};

const CriticScore = ({ score }: CriticScoreProps) => {
  if (!score) return null;

  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" borderRadius={2} px={2} py={1}>
      {score}
    </Badge>
  );
};

export default CriticScore;
