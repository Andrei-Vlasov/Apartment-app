import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    UserID: number;
    @Column({ type: 'date' })
    DateJoined: string;
    @Column()
    PasswordHash: string;
}
