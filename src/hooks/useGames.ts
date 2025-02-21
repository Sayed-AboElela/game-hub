import GamesService, {
  FetchGamesResponse,
  Game,
} from "@/services/games-service";
import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

const UseGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const { request, cancel } = GamesService.getAll<FetchGamesResponse>();
    setLoading(true);
    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setLoading(false);
      });

    return () => {
      cancel();
    };
  }, []);

  return { games, error, isLoading };
};

export default UseGames;
