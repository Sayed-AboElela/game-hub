import CriticScore from "@/components/game/CriticScore";
import DefinitionItem from "@/components/game/DefinitionItem";
import GameAttributes from "@/components/game/GameAttributes";
import ExpandableText from "@/components/general/ExpandableText";
import useGame from "@/hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailsPage = () => {
    let { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!)

    if (isLoading) return (<Spinner />)

    if (error || !game) throw error;

    return (
        <>
            <Heading fontSize='5xl'> {game.name}</Heading>

            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttributes game={game} />
        </>
    )
}

export default GameDetailsPage