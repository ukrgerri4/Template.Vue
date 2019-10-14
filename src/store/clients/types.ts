import { BaseSelectRequest, BaseSelectResponse } from '@/types/common/BaseSelectRequest';
import { ClientSelectModel } from '@/services/clients/types';
import { DataOptions } from '@/types/common/DataOptions';
import { FilterOption } from '@/types/common/FilterOptions';

export interface ClientSelectRequest extends BaseSelectRequest {
    Name: string;
}

export interface ClientsState {
    request: ClientSelectRequest;
    response: BaseSelectResponse<ClientSelectModel>;
    dataOptions: DataOptions;
    filterOptions: FilterOption[];
}

