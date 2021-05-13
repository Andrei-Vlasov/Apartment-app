import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    UserID: number;
    @Column()
    Email: string;
    @Column({ type: 'date' })
    DateJoined: string;
    @Column()
    FirstName: string;
    @Column()
    LastName: string;
    @Column()
    PhoneNumber: number;
}
