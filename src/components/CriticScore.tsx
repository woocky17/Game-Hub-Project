import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score > 75 ? "green" : score > 60 ? "yellow" : score < 50 ? "red" : "";

  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      colorPalette={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
