import genres from "@/data/genres.ts";
import { useQuery } from "@tanstack/react-query";
import { CACHE_GENRE_KEY, FetchRespone } from "@/services/constants.ts";
import genresService, { Genre } from "@/services/genres-service";

const useGenres = () => {
  return useQuery<FetchRespone<Genre>>({
    queryKey: CACHE_GENRE_KEY,
    queryFn: genresService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
