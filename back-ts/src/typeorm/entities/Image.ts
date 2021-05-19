import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    ImageID: number;
    @Column()
    AdvertID: number;
    @Column()
    Filename: string;
}
