import { Repository } from 'typeorm';
import { Ticket } from './ticketing.entity';
export declare class TicketingService {
    private repo;
    constructor(repo: Repository<Ticket>);
    create(subject: string, body: string, status?: string): Promise<Ticket>;
    selectOne(id: number): Promise<Ticket>;
    selectAll(): Promise<Ticket[]>;
    update(id: number, attrs: Partial<Ticket>): Promise<Ticket>;
    changeStatus(id: number, attrs: Partial<Ticket>): Promise<Ticket>;
}
