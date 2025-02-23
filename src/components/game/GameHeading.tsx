import {FC} from "react";
import {Heading} from "@chakra-ui/react";
import {GameQuery} from "@/App.tsx";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading: FC<Props> = ({gameQuery}) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

    return (
        <Heading as='h1' fontSize='2xl' marginBottom={4}>
            {heading}
        </Heading>
    )
}

export default GameHeading;
