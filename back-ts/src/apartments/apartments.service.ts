import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartments } from 'src/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateDto } from './dto/create.dto';

@Injectable()
export class ApartmentsService {
    constructor(
        @InjectRepository(Apartments) private readonly apartmentsRepository: Repository<Apartments>
    ) {}
    async createApartment(createDto: CreateDto): Promise<Apartments | undefined> {
        const apartment = { ...createDto } as Apartments;
        const added_apartment = await this.apartmentsRepository.save(apartment);

        return added_apartment;
    }

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
