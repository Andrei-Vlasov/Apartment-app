import { Module } from '@nestjs/common';
import { ApartmentModule } from './apartment/apartment.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env' }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.MYSQL_DB_HOST,
            port: Number.parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [],
            synchronize: true,
        }),
        ApartmentModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
