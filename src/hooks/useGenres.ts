import genres from "@/data/genres.ts";
import { CACHE_GENRE_KEY, FetchRespone } from "@/services/constants.ts";
import genresService, { Genre } from "@/services/genres-service";
import { useQuery } from "@tanstack/react-query";

const useGenres = () => {
  return useQuery<FetchRespone<Genre>>({
    queryKey: CACHE_GENRE_KEY,
    queryFn: genresService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });
};

export default useGenres;
