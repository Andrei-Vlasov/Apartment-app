import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ApartmentAdverts {
    @PrimaryGeneratedColumn()
    AdvertID: number;
    @Column()
    AuthorID: number;
    @Column({ type: 'date' })
    DateCreated: string;
    @Column()
    AccommodationType: string;
    @Column()
    DealType: string;
    @Column({ type: 'float8' })
    Global_x: number;
    @Column({ type: 'float8' })
    Global_y: number;
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
