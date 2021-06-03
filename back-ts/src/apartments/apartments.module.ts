import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartments } from '../typeorm';
import { ApartmentsService } from './apartments.service';
import { ApartmentsController } from './apartments.controller';

@Module({
    providers: [ApartmentsService],
    exports: [ApartmentsService],
    controllers: [ApartmentsController],
    imports: [TypeOrmModule.forFeature([Apartments])],
})
export class ApartmentsModule {}
