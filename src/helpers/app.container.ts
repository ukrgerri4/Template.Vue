import { Container } from 'inversify';
import { ClientsService } from '@/services/clients/clientsService';

const myContainer = new Container();
myContainer.bind<ClientsService>('ClientsService').to(ClientsService).inSingletonScope();

export { myContainer };
