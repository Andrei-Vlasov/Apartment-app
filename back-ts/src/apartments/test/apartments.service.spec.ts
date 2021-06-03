import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Apartments } from '../../typeorm';
import { ApartmentsService } from '../apartments.service';
import { apartmentStub } from './stubs/apartment.stub';
import { createDtoStub } from './stubs/createDto.stub';

describe('ApartmentsService', () => {
    let apartmentsService;
    let createDto;

    const mockApartmentsRepository = {
        save: jest.fn().mockResolvedValue(apartmentStub()),
        find: jest.fn().mockResolvedValue([apartmentStub()]),
        findOne: jest.fn().mockResolvedValue(apartmentStub()),
    };

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                ApartmentsService,
                {
                    provide: getRepositoryToken(Apartments),
                    useValue: mockApartmentsRepository,
                },
            ],
        }).compile();

        apartmentsService = module.get<ApartmentsService>(ApartmentsService);
        createDto = createDtoStub();
    });

    it('should be defined', () => {
        expect(apartmentsService).toBeDefined();
    });

    it('should create apartment and return apartment', async () => {
        expect(await apartmentsService.createApartment(createDto)).toEqual(apartmentStub());
    });

    it('should filter apartments and return apartments array', async () => {
        expect(await apartmentsService.filterApartments({})).toEqual([apartmentStub()]);
    });

    it('should find apartment by id', async () => {
        expect(await apartmentsService.findApartmentByID('1')).toEqual(apartmentStub());
    });
});
