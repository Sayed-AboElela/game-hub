import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import { CACHE_GENRE_KEY, FetchRespone } from "@/services/constants.ts";
import genresService from "@/services/genres-service";
import Genre from "@/entities/Genre";
import genres from "@/data/genres.ts";

const useGenres = () => {
  return useQuery<FetchRespone<Genre>>({
    queryKey: CACHE_GENRE_KEY,
    queryFn: genresService.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });
};

export default useGenres;
