import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Images {
    @PrimaryGeneratedColumn()
    ImageID: number;
    @Column()
    ApartmentID: number;
    @Column()
    Filename: string;
}
