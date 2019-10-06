import { injectable } from 'inversify';
import { BaseService } from '../baseService';
import { ClientSelectModel, ClientDetailsModel, ClientCreateModel } from './types';

@injectable()
export class ClientService extends BaseService<ClientSelectModel, ClientDetailsModel, ClientCreateModel, number> {
    public serviceName = 'client';
}
