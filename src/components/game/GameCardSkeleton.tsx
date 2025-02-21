import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
const GameCardSkeleton = () => {
  return (
    <Card.Root width='300px' overflow="hidden" borderRadius="10px">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
