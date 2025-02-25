import APIClient from "@/services/api-client";
import { Game } from "@/services/games-service";
import { useQuery } from "@tanstack/react-query";

const singleGameApiClient = new APIClient<Game>(`/games`)

const useGame = (slug: string) => {

    return useQuery<Game>({
        queryKey: ['games', slug],
        queryFn: () => singleGameApiClient.get(slug)
    })
}

export default useGame;