import { Injectable } from '@nestjs/common';
import pool from 'src/dbconfig/dbconnector';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
export class ApartmentService {
    async addApartment(dto: CreateApartmentDto) {
        const {
            authorId,
            dateCreated,
            dealType,
            locationData,
            price,
            title,
            roomCount,
            space,
            livingSpace,
            height,
            floor,
            totalFloors,
            yearBuilt,
            condition,
            heating,
            walls,
        } = dto;

        try {
            const client = await pool.connect();
            console.log('conn');

            const sql = `insert into "ApartmentAdvert"("AuthorID", "DateCreated", "DealType", "LocationData", "Price", "Title", "RoomCount", "Space", "LivingSpace", "Height", "Floor", "TotalFloors", "YearBuilt", "Condition", "Heating", "Walls")
            values (${authorId},'${dateCreated}',${dealType},'${locationData}',${price},'${title}',${roomCount},${space},${livingSpace},${height},${floor},${totalFloors},${yearBuilt},'${condition}','${heating}','${walls}')`;

            const { rows } = await client.query(sql);
            console.log('sql done!');

            client.release();

            console.log('Insertion done!');

            return rows;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllApartments(id: number) {
        const client = await pool.connect();

        const sql = `select * from "ApartmentAdvert" where "AuthorID"=${Number(id)}`;

        const { rows } = await client.query(sql);
        const apartments = rows;

        client.release();

        return apartments;
    }

    async getOneApartment() {
        console.log('service_getOneApartment');
    }

    async deleteApartment() {
        console.log('service_deleteApartment');
    }
}
