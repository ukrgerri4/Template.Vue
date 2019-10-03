import { Container } from 'inversify';
import { ClientService } from '@/services/clients/clientService';

const myContainer = new Container();
myContainer.bind<ClientService>('ClientService').to(ClientService).inSingletonScope();

export { myContainer };
