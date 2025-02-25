import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client"
import { FetchRespone } from "@/services/constants";
import Screenshot from "@/entities/Screenshot";

const useScreenshots = (gameId: number) => {

    const apiClient = new APIClient<FetchRespone<Screenshot>>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll
    })
}

export default useScreenshots