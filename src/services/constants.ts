export const CACHE_GENRE_KEY = ['genres'];
export const CACHE_PLATFORM_KEY = ['platforms'];
export const CACHE_GAMES_KEY = ['games'];

export interface FetchRespone<T> {
    count: number;
    results: T[];
    next?: string | null
}