import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartments } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApartmentsService {
    constructor(
        @InjectRepository(Apartments) private readonly apartmentsRepository: Repository<Apartments>
    ) {}

    async findApartmentByID(ApartmentID: string): Promise<Apartments | undefined> {
        const apartment = await this.apartmentsRepository.findOne({
            ApartmentID: Number(ApartmentID),
        });

        return apartment;
    }
}
