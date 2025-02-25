import { Trailer } from "@/entities/Trailer"
import APIClient from "@/services/api-client"
import { FetchRespone } from "@/services/constants";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameId: number) => {
    const apiClient = new APIClient<FetchRespone<Trailer>>(`/games/${gameId}/movies`);

    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: apiClient.getAll
    })
}

export default useTrailers