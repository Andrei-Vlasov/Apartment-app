import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartments } from 'src/typeorm';
import { Between, DeleteResult, Not, Repository } from 'typeorm';
import { CreateDto } from './dto/create.dto';
import { FilterDto } from './dto/filter.dto';

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

    async filterApartments(params: FilterDto): Promise<Apartments[] | undefined> {
        const filterDto = new FilterDto({ ...params });
        const conditions = {
            Price: Between(filterDto.MinPrice, filterDto.MaxPrice),
            Space: Between(filterDto.MinSpace, filterDto.MaxSpace),
            LivingSpace: Between(filterDto.MinLivingSpace, filterDto.MaxLivingSpace),
            RoomCount: Between(filterDto.MinRoomCount, filterDto.MaxRoomCount),
        };
        if ('MaxFloor' in params || 'MinFloor' in params) {
            conditions['Floor'] = Between(filterDto.MinFloor, filterDto.MaxFloor);
        }
        if ('MaxYearBuilt' in params || 'MinYearBuilt' in params) {
            conditions['YearBuilt'] = Between(filterDto.MinFloor, filterDto.MaxFloor);
        }
        if ('MaxHeight' in params || 'MinHeight' in params) {
            conditions['Height'] = Between(filterDto.MinHeight, filterDto.MaxHeight);
        }
        if ('MaxTotalFloors' in params || 'MinTotalFloors' in params) {
            conditions['TotalFloors'] = Between(filterDto.MinTotalFloors, filterDto.MaxTotalFloors);
        }
        // for (let key in myDictionary) {
        //     let value = myDictionary[key];
        //     // Use key and value
        // }
        const apartments = await this.apartmentsRepository.find(conditions);

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
