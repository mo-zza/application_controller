import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerService {
    serverHealthCheck() {
        return 'health good'
    }
}
