import APIClient from "@/services/api-client.ts";
import { FetchRespone } from "./constants";

export interface Genre {
  id: number;
  name: string;
  games_count: number;
  image_background: string;
}


export default new APIClient<FetchRespone<Genre>>('/genres');
