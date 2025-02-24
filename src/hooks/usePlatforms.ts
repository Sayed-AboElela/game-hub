import { CACHE_PLATFORM_KEY, FetchRespone } from "@/services/constants";
import platformService, { Platform } from "@/services/platform-service";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => {
  return useQuery<FetchRespone<Platform>>({
    queryKey: CACHE_PLATFORM_KEY,
    queryFn: platformService.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
