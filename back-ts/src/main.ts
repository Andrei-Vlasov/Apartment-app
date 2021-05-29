import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import secureSession from 'fastify-secure-session';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

    app.register(secureSession, {
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        },
        secret: process.env.COOKIE_SECRET,
        salt: process.env.COOKIE_SALT,
    });

    await app.listen(3000);
}
bootstrap();
