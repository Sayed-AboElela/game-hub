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
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );

export default UseGames;
