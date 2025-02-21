import GamesService, {
    FetchGamesResponse,
    Game,
} from "@/services/games-service";
import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

const UseGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const { request, cancel } = GamesService.getAll<FetchGamesResponse>();
    request
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      });

    return () => {
      cancel();
    };
  }, []);

  return { games, error };
};

export default UseGames;
