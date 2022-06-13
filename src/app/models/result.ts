import { Movie } from "./movie";

export interface Result extends Movie {
    id: number;
    gif: string;
    description: string;
}
