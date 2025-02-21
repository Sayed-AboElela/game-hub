import { Genre } from "@/services/genres-service";
import useData from "./useData";

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
