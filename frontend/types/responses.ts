export type ResponseType<T = unknown> = {
    req: T | null;
    loading: boolean;
    error: string;
}