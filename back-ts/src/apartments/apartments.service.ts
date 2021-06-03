import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartments } from '../typeorm';
import { Between, DeleteResult, Repository } from 'typeorm';
import { CreateDto } from './dto/create.dto';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class ApartmentsService {
    constructor(
        @InjectRepository(Apartments) private readonly apartmentsRepository: Repository<Apartments>
    ) {}
    async createApartment(createDto: CreateDto): Promise<Apartments | undefined> {
        createDto['PricePerSq'] = (createDto['Price'] / createDto['LivingSpace']).toFixed(2);
        const apartment = { ...createDto } as Apartments;
        const added_apartment = await this.apartmentsRepository.save(apartment);

        return added_apartment;
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
        const where = {};
        for (const extra of ['Condition', 'Heating', 'Walls']) {
            if (extra in params) {
                where[extra] = filterDto[extra];
            }
        }
        const apartments = await this.apartmentsRepository.find({ ...conditions, where });
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
