import useGenre from "@/hooks/useGenre.ts";
import usePlateform from "@/hooks/usePlateform.ts";
import useGameQueryStore from "@/store/gameQueryStore";
import { Heading } from "@chakra-ui/react";


const GameHeading = () => {
    const genreId = useGameQueryStore(s => s.gameQuery.genreId)
    const genre = useGenre(genreId);

    const platformId = useGameQueryStore(s => s.gameQuery.platformId)
    const platform = usePlateform(platformId);


    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading as='h1' fontSize='2xl' marginBottom={4}>
            {heading}
        </Heading>
    )
}

export default GameHeading;
