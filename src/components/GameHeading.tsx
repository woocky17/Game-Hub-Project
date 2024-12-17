import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genre);
  const platformId = useGameQueryStore((s) => s.gameQuery.platform);

  const heading = `
  ${platformId?.name || ""} 
  ${genreId?.name || ""} Games`;
  return (
    <Heading marginY={5} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
