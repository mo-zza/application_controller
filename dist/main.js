"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const admin = require('firebase-admin');
const serviceAccount = require('/Users/kamal/Desktop/zolbo/ZOLBO-CLIENT/src/zolbo-277706-firebase-adminsdk-gi8vc-1ff3d0bc96.json');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
exports.db = admin.auth();
//# sourceMappingURL=main.js.map