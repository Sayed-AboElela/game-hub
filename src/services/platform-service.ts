import APIClient from "./api-client";
import { FetchRespone } from "./constants";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new APIClient<FetchRespone<Platform>>(
  "/platforms/lists/parents"
);
