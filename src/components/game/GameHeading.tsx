import { GameQuery } from "@/App.tsx";
import useGenre from "@/hooks/useGenre.ts";
import usePlateform from "@/hooks/usePlateform.ts";
import { Heading } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading: FC<Props> = ({gameQuery}) => {

    const genre = useGenre(gameQuery.genreId);

    const platform = usePlateform(gameQuery.platformId);


    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading as='h1' fontSize='2xl' marginBottom={4}>
            {heading}
        </Heading>
    )
}

export default GameHeading;
