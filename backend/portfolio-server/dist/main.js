"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config({ path: '../.env' });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,POST',
        allowedHeaders: 'Content-Type,Authorization',
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 5000);
    console.log(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map