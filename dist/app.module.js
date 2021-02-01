"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const rabbitmq_service_1 = require("./rabbitmq/rabbitmq.service");
const email_controller_1 = require("./email/email.controller");
const email_service_1 = require("./email/email.service");
const sell_controller_1 = require("./sell/sell.controller");
const sell_service_1 = require("./sell/sell.service");
const withdrawal_controller_1 = require("./withdrawal/withdrawal.controller");
const withdrawal_service_1 = require("./withdrawal/withdrawal.service");
const fund_controller_1 = require("./fund/fund.controller");
const fund_service_1 = require("./fund/fund.service");
const server_controller_1 = require("./server/server.controller");
const server_service_1 = require("./server/server.service");
const firestore_service_1 = require("./firestore/firestore.service");
const response_service_1 = require("./response/response.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController, email_controller_1.EmailController, sell_controller_1.SellController, withdrawal_controller_1.WithdrawalController, fund_controller_1.FundController, server_controller_1.ServerController],
        providers: [app_service_1.AppService, users_service_1.UsersService, rabbitmq_service_1.RabbitmqService, email_service_1.EmailService, sell_service_1.SellService, withdrawal_service_1.WithdrawalService, fund_service_1.FundService, server_service_1.ServerService, firestore_service_1.FirestoreService, response_service_1.ResponseService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map