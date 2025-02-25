import { Screenshot } from "@/entities/Screenshot";
import APIClient from "@/services/api-client"
import { FetchRespone } from "@/services/constants";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) => {
    
    const apiClient = new APIClient<FetchRespone<Screenshot>>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll
    })
}

export default useScreenshots