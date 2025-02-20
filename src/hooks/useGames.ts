import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {AxiosError, CanceledError} from "axios";

export interface Game {
    id: number;
    name: string;
}

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const UseGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGamesResponse>("/games", {signal: controller.signal})
            .then((res) => {
                setGames(res.data.results);
            })
            .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError((err as AxiosError).message);
                }
            );

        return () => {
            controller.abort();
        }
    }, []);

    return {games, error};
};

export default UseGames;
