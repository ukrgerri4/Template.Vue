export interface BaseSelectRequest {
    PageNumber: number;
    PageSize: number;
}

export interface BaseSelectResponse<T> {
    Count: number;
    Values: T[];
}
