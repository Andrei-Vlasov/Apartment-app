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
        const apartment = new Apartments();
        apartment.AuthorID = createDto.AuthorID;
        apartment.DateCreated = createDto.DateCreated;
        apartment.AccommodationType = createDto.AccommodationType;
        apartment.DealType = createDto.DealType;
        apartment.GlobalX = createDto.GlobalX;
        apartment.GlobalY = createDto.GlobalY;
        apartment.Address = createDto.Address;
        apartment.LocalityID = createDto.LocalityID;
        apartment.AreaID = createDto.AreaID;
        apartment.RegionID = createDto.RegionID;
        apartment.Price = createDto.Price;
        apartment.Description = createDto.Description;
        apartment.ContactInfo = createDto.ContactInfo;
        apartment.RoomCount = createDto.RoomCount;
        apartment.Space = createDto.Space;
        apartment.LivingSpace = createDto.LivingSpace;
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
