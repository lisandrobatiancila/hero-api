import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HeroEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    power: string;
    @Column()
    description: string;
}

@Entity()
export class HireHeroEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    heroID: number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
}