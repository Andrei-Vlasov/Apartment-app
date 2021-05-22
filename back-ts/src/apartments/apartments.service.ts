import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartments } from 'src/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ApartmentsService {
    constructor(
        @InjectRepository(Apartments) private readonly apartmentsRepository: Repository<Apartments>
    ) {}

    async getAllApartments(): Promise<Apartments[] | undefined> {
        const apartments = await this.apartmentsRepository.find({});

        return apartments;
    }

    async findApartmentByID(ApartmentID: string): Promise<Apartments | undefined> {
        const apartment = await this.apartmentsRepository.findOne({
            ApartmentID: Number(ApartmentID),
        });

        return apartment;
    }
    async deleteApartment(ApartmentID: string): Promise<DeleteResult | undefined> {
        const result = await this.apartmentsRepository.delete({
            ApartmentID: Number(ApartmentID),
        });

        return result;
    }
}
