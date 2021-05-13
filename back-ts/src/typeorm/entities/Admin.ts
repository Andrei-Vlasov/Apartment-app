import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    AdminID: number;
    @Column()
    Login: string;
    @Column()
    PasswordHash: string;
    @Column({ type: 'date' })
    DateGranted: string;
}
