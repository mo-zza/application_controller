export declare class RpcBroker {
    _url: string;
    params: any;
    _queueName: string;
    connection: any;
    channel: any;
    correlationId: string;
    q: any;
    constructor(data: string, queueName: string, url: string);
    generateUuid(): string;
    setting(): Promise<void>;
    assetQueue(): Promise<void>;
    sendToQueue(): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    result(): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
}
export declare class RabbitmqService {
    getQueueData(body: any): Promise<{
        queue: any;
        channel: any;
        correlationdId: string;
    }>;
    getControllerQueueBody(controllerType: any, data: any, uid: any): Promise<any>;
    getFundControllerQueueBody(controllerType: any, data: any): Promise<any>;
}
