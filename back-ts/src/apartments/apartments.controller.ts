import { Controller, Body, Post, Get, Delete, Param, Query } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { Apartments } from 'src/typeorm';
import { CreateDto } from './dto/create.dto';
import { FilterDto } from './dto/filter.dto';

@Controller('apartments')
export class ApartmentsController {
    constructor(private readonly apartmentsService: ApartmentsService) {}
    @Post('create')
    async create(@Body() createDto: CreateDto): Promise<Apartments> {
        const result = await this.apartmentsService.createApartment(createDto);

        return result;
    }
    @Get()
    async filter(@Query() params: FilterDto) {
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
