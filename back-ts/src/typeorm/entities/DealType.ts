import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DealType {
    @PrimaryGeneratedColumn()
    DealID: number;
    @Column()
    DealName: string;
}
