import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-service";
import { Text, HStack, Image, List } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if(error) return null;

  return (
    <List.Root>
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}

      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={3} listStyle={"none"}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"35px"}
              borderRadius="6px"
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
