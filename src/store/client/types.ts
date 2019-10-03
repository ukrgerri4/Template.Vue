import { BaseSelectRequest } from '@/types/common/BaseSelectRequest';

export interface ClientSelectRequest extends BaseSelectRequest {
    Name: string;
}

export interface ClientState {
    request: ClientSelectRequest;
}

