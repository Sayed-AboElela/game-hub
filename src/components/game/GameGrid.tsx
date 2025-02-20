import {Text} from "@chakra-ui/react";
import useGames, {Game} from "@/hooks/useGames.ts";

const GameGrid = () => {
    const {games, error} = useGames()
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game: Game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    )

};

export default GameGrid;
