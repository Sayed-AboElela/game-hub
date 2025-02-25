import APIClient from "./api-client";
import { FetchRespone } from "./constants";
import Platform from "../entities/Platform";

export default new APIClient<FetchRespone<Platform>>(
  "/platforms/lists/parents"
);
