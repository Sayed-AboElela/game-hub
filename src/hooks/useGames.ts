import { FetchRespone } from "@/services/constants";
import gamesService from "@/services/games-service";
import { Game } from "@/entities/Game";
import useGameQueryStore from "@/store/gameQueryStore.ts";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

const UseGames = () => {

    const gameQuery = useGameQueryStore(s => s.gameQuery)

    return useInfiniteQuery<FetchRespone<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam = 1 }) => {
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
        placeholderData: (previousData) => previousData,
        staleTime: ms('24h')
    });
};
export default UseGames;
