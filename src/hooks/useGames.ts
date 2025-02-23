import { GameQuery } from "@/App";
import { axiosInstance } from "@/services/api-client";
import { FetchRespone } from "@/services/constants";
import gamesService, { Game } from "@/services/games-service";
import { useQuery } from "@tanstack/react-query";

const UseGames = (gameQuery: GameQuery) => {
  //   return useQuery<FetchRespone<Game>, Error>({
  //     queryKey: ["games", gameQuery],
  //     queryFn: () => {
  //       return axiosInstance
  //         .get("/games", {
  //           params: {
  //             genres: gameQuery.genre?.id,
  //             parent_platforms: gameQuery.platform?.id,
  //             ordering: gameQuery.sortOrder,
  //             search: gameQuery.searchText,
  //           },
  //         })
  //         .then((res) => res.data);
  //     },
  //   });
  return useQuery<FetchRespone<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      });
    },
  });
};
export default UseGames;
