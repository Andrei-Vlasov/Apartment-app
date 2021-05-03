import { Module } from '@nestjs/common';
import { ApartmentModule } from './apartment/apartment.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [ApartmentModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
