import { Game } from "@/services/games-service";
import useData from "./useData";
import { Genre } from "@/services/genres-service";

const UseGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default UseGames;
