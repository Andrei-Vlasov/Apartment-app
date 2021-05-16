import { Module } from '@nestjs/common';
import { ApartmentModule } from './apartment/apartment.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { entities } from './typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env' }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number.parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: entities,
            synchronize: true,
        }),
        ApartmentModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
