import { BaseService } from '../baseService';
import { ClientSelectModel, ClientDetailsModel, ClientCreateModel } from './types';

export class ClientService extends BaseService<ClientSelectModel, ClientDetailsModel, ClientCreateModel, number> {
    public serviceName = 'client';
}
