import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const admin = require('firebase-admin')
const serviceAccount = require('/path/to/service/account.json');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

admin.initializeApp({credential: admin.credential.cert(serviceAccount)})
export const db = admin.auth()
