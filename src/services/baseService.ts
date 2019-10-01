import axios from 'axios';
import { BaseSelectRequest, BaseSelectResponse } from '@/types/common/BaseSelectRequest.ts';

export abstract class BaseService<TSelect, TDetail, TCreate, TKey> {
    protected serviceName!: string;
    protected url: string = process.env.VUE_APP_IDS_URL;

    public select(queryModel: BaseSelectRequest): Promise<BaseSelectResponse<TSelect>> {
        return axios.post<BaseSelectResponse<TSelect>>(`${this.url}/api/${this.serviceName}/select`, queryModel)
            .then((response) => response.data);
    }

    public details(id: TKey): Promise<TDetail> {
        return axios.get(`${this.url}/api/${this.serviceName}/details/${id}`);
    }

    public create(createModel: TCreate): Promise<TKey> {
        return axios.post(`${this.url}/api/${this.serviceName}/create`, createModel);
    }

    public edit(editModel: TCreate): Promise<any> {
        return axios.post(`${this.url}/api/${this.serviceName}/edit`, editModel);
    }

    public delete(id: TKey): Promise<any> {
        return axios.delete(`${this.url}/api/${this.serviceName}/delete/${id}`);
    }
}
