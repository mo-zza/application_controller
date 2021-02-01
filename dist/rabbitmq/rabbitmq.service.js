"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitmqService = exports.RpcBroker = void 0;
const common_1 = require("@nestjs/common");
const amqp = require('amqplib');
class RpcBroker {
    constructor(data, queueName, url) {
        this._url = url;
        this.params = JSON.stringify(data);
        this._queueName = queueName;
        this.connection = undefined;
        this.channel = undefined;
    }
    generateUuid() {
        return Math.random().toString() +
            Math.random().toString() +
            Math.random().toString();
    }
    async setting() {
        this.connection = await amqp.connect(this._url);
        this.channel = await this.connection.createChannel();
        this.correlationId = this.generateUuid();
    }
    async assetQueue() {
        let queue = await this.channel.assertQueue('', { exclusive: true });
        this.q = queue;
    }
    async sendToQueue() {
        await this.channel.sendToQueue(this._queueName, Buffer.from(this.params), { correlationId: this.correlationId, replyTo: this.q.queue });
        let data = { "queue": this.q.queue, "channel": this.channel, "correlationdId": this.correlationId };
        return data;
    }
    async result() {
        await this.setting();
        await this.assetQueue();
        return this.sendToQueue();
    }
}
exports.RpcBroker = RpcBroker;
let RabbitmqService = class RabbitmqService {
    async getQueueData(body) {
        const broker = new RpcBroker(JSON.stringify(body), 'zolbo_queue', 'amqp://localhost');
        let result = await broker.result();
        return result;
    }
    async getControllerQueueBody(controllerType, data, uid) {
        let controllerTypeBody = { "controller_type": controllerType, "uid": uid };
        let assignBody = Object.assign(controllerTypeBody, data);
        return assignBody;
    }
    async getFundControllerQueueBody(controllerType, data) {
        let controllerTypeBody = { "controller_type": controllerType };
        let assignBody = Object.assign(controllerTypeBody, data);
        return assignBody;
    }
};
RabbitmqService = __decorate([
    common_1.Injectable()
], RabbitmqService);
exports.RabbitmqService = RabbitmqService;
//# sourceMappingURL=rabbitmq.service.js.map