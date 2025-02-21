import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-service";
import { Text, HStack, Image, List } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  return (
    <List.Root >
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={3} listStyle={'none'}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"35px"}
              borderRadius='6px'
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
