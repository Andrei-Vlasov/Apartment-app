import { Controller, Get, Delete, Param } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';

@Controller('apartments')
export class ApartmentsController {
    constructor(private readonly apartmentsService: ApartmentsService) {}

    @Get()
    async getAll() {
        const result = await this.apartmentsService.getAllApartments();

        return result;
    }
    @Get(':id')
    async findByID(@Param('id') apartmentID: string) {
        const result = await this.apartmentsService.findApartmentByID(apartmentID);

        return result;
    }
    @Delete(':id')
    async delete(@Param('id') apartmentID: string) {
        const result = await this.apartmentsService.deleteApartment(apartmentID);

        return result;
    }
}
