import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
@Entity()
export class Ticket{

    @Exclude()
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:true})
    ticketnumber:number;

    @Column()
    subject:string;

    @Column()
    body:string;

    @Column()
    status:string;



}