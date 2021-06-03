import { Controller, Body, Post, Get, Delete, Param, Query, UseGuards } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { Apartments } from 'src/typeorm';
import { CreateDto } from './dto/create.dto';
import { FilterDto } from './dto/filter.dto';
import { AuthenticatedGuard } from '../guards';

@Controller('apartments')
export class ApartmentsController {
    constructor(private readonly apartmentsService: ApartmentsService) {}

    @Post('create')
    @UseGuards(AuthenticatedGuard)
    async create(@Body() createDto: CreateDto): Promise<Apartments> {
        const result = await this.apartmentsService.createApartment(createDto);

        return result;
    }
    @Post()
    async filter(@Body() params: FilterDto): Promise<Apartments[]> {
        const result = await this.apartmentsService.filterApartments(params);

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
