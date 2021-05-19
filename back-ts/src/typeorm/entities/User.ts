import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    UserID: number;
    @Column({ type: 'date' })
    DateJoined: string;
    @Column()
    PasswordHash: string;
}
