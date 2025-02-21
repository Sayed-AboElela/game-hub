import { Game, Platform } from "@/services/games-service";
import useData from "./useData";
import { Genre } from "@/services/genres-service";

const UseGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default UseGames;
