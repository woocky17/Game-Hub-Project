import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreContainer = ({ children }: Props) => {
  return (
    <Box listStyle={"none"} paddingY={"5px"}>
      {children}
    </Box>
  );
};

export default GenreContainer;
