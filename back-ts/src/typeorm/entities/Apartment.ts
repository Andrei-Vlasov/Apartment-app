import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apartments {
    @PrimaryGeneratedColumn('increment')
    ApartmentID: number;
    @Column()
    AuthorID: number;
    @Column({ type: 'date' })
    DateCreated: string;
    @Column()
    AccommodationType: string; // houses/flats
    @Column()
    DealType: string; // rent/buy
    @Column({ type: 'double precision' })
    GlobalX: number;
    @Column({ type: 'double precision' })
    GlobalY: number;
    @Column({ nullable: true })
    Address: string;
    @Column()
    LocalityID: number;
    @Column()
    AreaID: number;
    @Column()
    RegionID: number;
    @Column()
    Price: number;
    @Column({ nullable: true, type: 'text' })
    Description: string;
    @Column()
    ContactInfo: string;
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
