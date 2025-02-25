import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import Game from "@/entities/Game";

const singleGameApiClient = new APIClient<Game>(`/games`)

const useGame = (slug: string) => {

    return useQuery<Game>({
        queryKey: ['games', slug],
        queryFn: () => singleGameApiClient.get(slug)
    })
}

export default useGame;