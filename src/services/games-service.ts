import APIClient from "./api-client";
import { FetchRespone } from "./constants";
import { Game } from "../entities/Game";

export default new APIClient<FetchRespone<Game>>("/games");
