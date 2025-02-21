import { Game } from "@/services/games-service";
import useData from "./useData";

const UseGames = () => useData<Game>("/games");

export default UseGames;
