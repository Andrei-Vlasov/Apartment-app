import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const app_port = process.env.APP_PORT || 3000;

    // express session
    app.use(
        session({
            cookie: {
                maxAge: 1000 * 60 * 60 * 24,
            },
            secret: process.env.COOKIE_SECRET,
            resave: false,
            saveUninitialized: false,
        })
    );

    // passport initialization
    app.use(passport.initialize());
    app.use(passport.session());

    await app.listen(app_port, () => console.log(`Running at port ${app_port}`));
}
bootstrap();
