import {GameQuery} from "@/App";
import {FetchRespone} from "@/services/constants";
import gamesService, {Game} from "@/services/games-service";
import {useInfiniteQuery} from "@tanstack/react-query";

const UseGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchRespone<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) => {
      return gamesService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.next ? pages.length + 1 : undefined,
    placeholderData: (previousData, previousQuery) => previousData,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};
export default UseGames;
