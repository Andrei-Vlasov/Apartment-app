import { Module } from '@nestjs/common';
import { ApartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';

@Module({
    controllers: [ApartmentController],
    providers: [ApartmentService],
})
export class ApartmentModule {}
