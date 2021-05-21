import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartments } from 'src/typeorm';
import { ApartmentsService } from './apartments.service';

@Module({
    providers: [ApartmentsService],
    exports: [ApartmentsService],
    imports: [TypeOrmModule.forFeature([Apartments])],
})
export class ApartmentsModule {}
