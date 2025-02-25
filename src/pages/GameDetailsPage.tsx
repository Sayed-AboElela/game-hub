import GameAttributes from "@/components/game/GameAttributes";
import GameScreenshots from "@/components/game/GameScreenshots";
import GameTrailer from "@/components/game/GameTrailer";
import ExpandableText from "@/components/general/ExpandableText";
import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailsPage = () => {
    let { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!)

    if (isLoading) return (<Spinner />)

    if (error || !game) throw error;

    return (
        <SimpleGrid columns={{
            base: 1,
            md: 2
        }}>
            <GridItem>
                <Heading fontSize='5xl'> {game.name}</Heading>
                <ExpandableText>{game.description_raw}</ExpandableText>
                <GameAttributes game={game} />
            </GridItem>

            <GridItem>
                <GameTrailer gameId={game.id} />
                <GameScreenshots gameId={game.id} />
            </GridItem>
        </SimpleGrid>
    )
}

export default GameDetailsPage