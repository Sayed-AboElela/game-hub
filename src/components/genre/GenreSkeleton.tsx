import { HStack, Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../ui/skeleton";

const GenreSkeleton = () => {
  return (
    <Stack gap="6" maxW="xs" paddingY={3}>
      <HStack width="full">
        <Skeleton width='35px' height='38px' borderRadius='7px' />
        <SkeletonText noOfLines={1} />
      </HStack>
    </Stack>
  );
};

export default GenreSkeleton;
