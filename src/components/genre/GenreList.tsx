import useGenres from "@/hooks/useGenres";
import { Genre } from "@/services/genres-service";
import getCroppedImageUrl from "@/services/image-service";
import { HStack, Image, Link, List } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return null;

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
            <Link
              onClick={() => {
                onSelectGenre(genre);
              }}
              fontSize={"lg"}
              fontWeight={genre.id === selectedGenre?.id ? "700" : "400"}
            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
