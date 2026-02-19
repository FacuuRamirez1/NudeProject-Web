export type ResponseType<T> = {
    res: T | null;
    loading: boolean;
    error: string;
}