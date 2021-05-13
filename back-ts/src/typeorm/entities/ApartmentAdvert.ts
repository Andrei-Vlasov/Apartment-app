import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ApartmentAdvert {
    @PrimaryGeneratedColumn()
    AdvertID: number;
    @Column()
    authorID: number;
    @Column()
    DateCreated: string;
    @Column()
    DealType: number;
    @Column()
    LocationData: string;
    @Column()
    Price: number;
    @Column()
    Title: string;
    @Column()
    RoomCount: number;
    @Column()
    Space: number;
    @Column()
    LivingSpace: number;
    @Column({ nullable: true })
    Height: number;
    @Column({ nullable: true })
    Floor: number;
    @Column({ nullable: true })
    TotalFloors: number;
    @Column({ nullable: true })
    YearBuilt: number;
    @Column({ nullable: true })
    Condition: string;
    @Column({ nullable: true })
    Heating: string;
    @Column({ nullable: true })
    Walls: string;
}
