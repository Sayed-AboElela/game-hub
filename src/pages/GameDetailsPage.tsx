import useGame from "@/hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailsPage = () => {
    let { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!)

    if (isLoading) return (<Spinner />)

    if (error || !game) throw error;

    return (
        <div>
            <Heading fontSize='5xl'> {game.name}</Heading>
            <Text fontSize='xl' mt={5}>{game.description_raw}</Text>
        </div>
    )
}

export default GameDetailsPage