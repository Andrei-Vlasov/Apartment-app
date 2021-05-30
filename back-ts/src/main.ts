import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import * as session from 'express-session';
import * as passport from 'passport';
import { getRepository } from 'typeorm';
import { Session } from './typeorm';
import { TypeormStore } from 'connect-typeorm';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const app_port = process.env.APP_PORT || 3000;

    // typeorm session store
    const sessionRepo = getRepository(Session);

    // express session
    app.use(
        session({
            cookie: {
                maxAge: 1000 * 60 * 60 * 24,
            },
            secret: process.env.COOKIE_SECRET,
            resave: false,
            saveUninitialized: false,
            // set session store
            store: new TypeormStore().connect(sessionRepo),
        })
    );

    // passport initialization
    app.use(passport.initialize());
    app.use(passport.session());

    await app.listen(app_port, () => console.log(`Running at port ${app_port}`));
}
bootstrap();
