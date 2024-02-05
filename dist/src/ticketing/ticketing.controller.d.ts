import { CreateTicketDto } from 'dtos/create-ticket-dto';
import { TicketingService } from './ticketing.service';
import { updateDetailsDto } from 'dtos/update-details-dto';
import { changeStatusDto } from 'dtos/change-status-dto';
export declare class TicketingController {
    private ticketService;
    constructor(ticketService: TicketingService);
    createTicket(body: CreateTicketDto): void;
    selectAll(): Promise<import("./ticketing.entity").Ticket[]>;
    selectOne(id: string): Promise<import("./ticketing.entity").Ticket>;
    updateDetails(id: string, body: updateDetailsDto): Promise<import("./ticketing.entity").Ticket>;
    updateChangeRequest(id: string, body: changeStatusDto): Promise<import("./ticketing.entity").Ticket>;
}
