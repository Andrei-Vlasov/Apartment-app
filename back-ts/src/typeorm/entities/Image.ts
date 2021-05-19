import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Images {
    @PrimaryGeneratedColumn()
    ImageID: number;
    @Column()
    AdvertID: number;
    @Column()
    Filename: string;
}
