import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";
const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height={"200px"} />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCardSkeleton;
