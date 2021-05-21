import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartments } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApartmentsService {
    constructor(
        @InjectRepository(Apartments) private readonly apartmentsRepository: Repository<Apartments>
    ) {}
}
