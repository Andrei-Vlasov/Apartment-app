import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const app_port = process.env.APP_PORT || 3000;
    await app.listen(app_port, () => console.log(`Running at port ${app_port}`));
}
bootstrap();
