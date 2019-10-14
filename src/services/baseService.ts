import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { injectable } from 'inversify';
import { BaseSelectRequest, BaseSelectResponse } from '@/types/common/BaseSelectRequest.ts';

@injectable()
export abstract class BaseService<TSelect, TDetail, TCreate, TKey> {
    protected serviceName!: string;
    protected url: string = process.env.VUE_APP_IDS_URL;

    public select(queryModel: BaseSelectRequest, config?: AxiosRequestConfig): Promise<BaseSelectResponse<TSelect>> {
        return axios.post<BaseSelectResponse<TSelect>>(`${this.url}/api/${this.serviceName}/select`, queryModel, config)
            .then((response) => response.data);
    }

    public details(id: TKey, config?: AxiosRequestConfig): Promise<TDetail> {
        return axios.get(`${this.url}/api/${this.serviceName}/details/${id}`, config);
    }

    public create(createModel: TCreate, config?: AxiosRequestConfig): Promise<TKey> {
        return axios.post(`${this.url}/api/${this.serviceName}/create`, createModel, config);
    }

    public edit(editModel: TCreate, config?: AxiosRequestConfig): Promise<any> {
        return axios.post(`${this.url}/api/${this.serviceName}/edit`, editModel, config);
    }

    public delete(id: TKey, config?: AxiosRequestConfig): Promise<any> {
        return axios.delete(`${this.url}/api/${this.serviceName}/delete/${id}`, config);
    }
}
