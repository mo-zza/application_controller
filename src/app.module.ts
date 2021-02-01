import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
import { SellController } from './sell/sell.controller';
import { SellService } from './sell/sell.service';
import { WithdrawalController } from './withdrawal/withdrawal.controller';
import { WithdrawalService } from './withdrawal/withdrawal.service';
import { FundController } from './fund/fund.controller';
import { FundService } from './fund/fund.service';
import { ServerController } from './server/server.controller';
import { ServerService } from './server/server.service';
import { FirestoreService } from './firestore/firestore.service';
import { ResponseService } from './response/response.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, EmailController, SellController, WithdrawalController, FundController, ServerController],
  providers: [AppService, UsersService, RabbitmqService, EmailService, SellService, WithdrawalService, FundService, ServerService, FirestoreService, ResponseService],
})
export class AppModule {}
