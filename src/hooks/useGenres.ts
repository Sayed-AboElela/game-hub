import genres from "@/data/genres.ts";
//import useData from "@/hooks/useData.ts";
//import {Genre} from "@/services/genres-service.ts";

//const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres;
