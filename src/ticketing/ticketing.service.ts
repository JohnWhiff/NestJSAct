import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './ticketing.entity';

@Injectable()
export class TicketingService {
    constructor(@InjectRepository(Ticket) private repo:Repository<Ticket>){}


    

    create(subject:string, body:string, status:string ='pending'){
        const ticket =this.repo.create({ticketnumber:this.generateRandomTicketNumber(),subject,body,status})
        return this.repo.save(ticket);

    }

    private generateRandomTicketNumber(): number {
        return Math.floor(Math.random() * 1000);
    }

    selectOne(ticketnumber: number) {
        return this.repo.findOne({ where: { ticketnumber } });
    }

    selectAll(){
        return this.repo.find();
    }

    async update(ticketnumber:number,attrs:Partial<Ticket>){
        const ticket= await this.selectOne(ticketnumber);

        if (!ticket){
            throw new NotFoundException('ticket not found');
        }

        Object.assign(ticket, attrs);
        return this.repo.save(ticket)

    }

    async changeStatus(ticketnumber:number,attrs:Partial<Ticket>){
        const ticket= await this.selectOne(ticketnumber);

        if (!ticket){
            throw new NotFoundException('ticket not found');
        }

        Object.assign(ticket, attrs);
        return this.repo.save(ticket)

    }
}
