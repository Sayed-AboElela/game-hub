import { GameQuery } from "@/App";
import { Game } from "@/services/games-service";
import useData from "./useData";

const UseGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default UseGames;
