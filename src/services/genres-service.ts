import APIClient from "@/services/api-client.ts";
import { FetchRespone } from "./constants";
import Genre from "../entities/Genre";

export default new APIClient<FetchRespone<Genre>>('/genres');
