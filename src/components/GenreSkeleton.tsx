import { HStack, List } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";
const GameCardSkeleton = () => {
  return (
    <List.Item>
      <HStack>
        <Skeleton boxSize={"32px"} />
        <SkeletonText />
      </HStack>
    </List.Item>
  );
};

export default GameCardSkeleton;
