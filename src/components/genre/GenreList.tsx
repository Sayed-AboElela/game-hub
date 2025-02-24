import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-service";
import {Heading, HStack, Image, Link, List} from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
    selectedGenreId?: number;
    onSelectGenre: (genreId: number) => void;
}

const GenreList = ({selectedGenreId, onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    if (error) return null;

    return (
        <>
            <Heading fontSize='2xl' marginBottom='3'>Genres</Heading>
            <List.Root>
                {isLoading &&
                    skeletons.map((skeleton) => <GenreSkeleton key={skeleton}/>)}

                {data?.results?.map((genre) => (
                    <List.Item key={genre.id} paddingY={3} listStyle={"none"}>
                        <HStack>
                            <Image
                                objectFit='cover'
                                src={getCroppedImageUrl(genre.image_background)}
                                boxSize={"35px"}
                                borderRadius="6px"
                            />
                            <Link
                                onClick={() => {
                                    onSelectGenre(genre.id);
                                }}
                                fontSize={"lg"}
                                fontWeight={genre.id === selectedGenreId ? "700" : "400"}
                            >
                                {genre.name}
                            </Link>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
        </>
    );
};

export default GenreList;
