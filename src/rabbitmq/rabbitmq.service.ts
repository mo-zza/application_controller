import { Injectable } from '@nestjs/common';
const amqp = require('amqplib')

export class RpcBroker {
    _url: string
    params: any
    _queueName: string
    connection: any
    channel: any
    correlationId: string
    q: any

    constructor(data: string, queueName: string, url: string) {
        this._url = url
        this.params = JSON.stringify(data)
        this._queueName = queueName

        this.connection = undefined
        this.channel = undefined
    }

    generateUuid() {
        return Math.random().toString() +
               Math.random().toString() +
               Math.random().toString();
      }

    async setting() {
        this.connection = await amqp.connect(this._url)
        this.channel = await this.connection.createChannel()
        this.correlationId = this.generateUuid()
    }

    async assetQueue() {
        let queue = await this.channel.assertQueue('', {exclusive : true})
        this.q = queue
    }

    async sendToQueue() {
        await this.channel.sendToQueue(this._queueName, Buffer.from(this.params), {correlationId: this.correlationId, replyTo: this.q.queue})
        let data = {"queue" : this.q.queue, "channel" : this.channel, "correlationdId" : this.correlationId}
        // return send
        return data
    }

    async result() {
        await this.setting()
        await this.assetQueue()
        return this.sendToQueue()
    }
}

@Injectable()
export class RabbitmqService {
    async getQueueData(body) {
        const broker = new RpcBroker(JSON.stringify(body), 'queue_name', 'amqp://www.example.com')
        let result = await broker.result()
        return result
    }

    async getControllerQueueBody(controllerType, data, uid) {
        let controllerTypeBody = {"controller_type":controllerType,"uid":uid}
        let assignBody = Object.assign(controllerTypeBody,  data)
        return assignBody
    }

    async getFundControllerQueueBody(controllerType, data) {
        let controllerTypeBody = {"controller_type":controllerType}
        let assignBody = Object.assign(controllerTypeBody,  data)
        return assignBody
    }
}