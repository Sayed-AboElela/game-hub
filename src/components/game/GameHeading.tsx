import {FC} from "react";
import {Heading} from "@chakra-ui/react";
import {GameQuery} from "@/App.tsx";
import useGenres from "@/hooks/useGenres.ts";
import usePlatforms from "@/hooks/usePlatforms.ts";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading: FC<Props> = ({gameQuery}) => {

    const {data: genres} = useGenres();
    const {data: platforms} = usePlatforms();

    const genre = genres?.results.find(g => g.id === gameQuery.genreId)
    const platform = platforms?.results.find(p => p.id === gameQuery.platformId)

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading as='h1' fontSize='2xl' marginBottom={4}>
            {heading}
        </Heading>
    )
}

export default GameHeading;
