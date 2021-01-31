import { Container } from 'inversify';
import { Application } from './app';
import { DateController } from './controllers/data/date.controller';
import { IndexController } from './controllers/index/index.controller';
import { Server } from './server';
import { DateService } from './services/data/date.service';
import { IndexService } from './services/index/index.service';
import Types from './types';

export const containerBootstrapper: () => Promise<Container> = async () => {
    const container: Container = new Container();

    container.bind(Types.Server).to(Server);
    container.bind(Types.Application).to(Application);
    container.bind(Types.IndexController).to(IndexController);
    container.bind(Types.IndexService).to(IndexService);

    container.bind(Types.DateController).to(DateController);
    container.bind(Types.DateService).to(DateService);

    return container;
};
