import { ServerService } from './server.service';
export declare class ServerController {
    private readonly serverService;
    constructor(serverService: ServerService);
    serverHealth(): string;
}
