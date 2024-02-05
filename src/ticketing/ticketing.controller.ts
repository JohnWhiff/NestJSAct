import { Body,Controller,Post,Get, Param,NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from '../../dtos/create-ticket-dto';
import { TicketingService } from './ticketing.service';
import { updateDetailsDto } from '../../dtos/update-details-dto';
import { changeStatusDto } from '../../dtos/change-status-dto';
import { UseInterceptors } from '@nestjs/common';
import { ClassSerializerInterceptor } from '@nestjs/common';

@Controller('ticketing')
export class TicketingController {
    constructor(private ticketService:TicketingService){}

    @Post('/create')
    createTicket(@Body()body:CreateTicketDto){

        this.ticketService.create(body.subject, body.body)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/selectAll')
    selectAll() {
        return this.ticketService.selectAll();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:ticketnumber')
    async selectOne(@Param('ticketnumber')ticketnumber:string){
        const ticket = await this.ticketService.selectOne(parseInt(ticketnumber));

        if(!ticket){
            throw new NotFoundException('ticket not found');
        }
        return ticket;
    }

    @Post('updateDetails/:ticketnumber')
    updateDetails(@Param('ticketnumber') ticketnumber:string,@Body()body:updateDetailsDto){
        return this.ticketService.update(parseInt(ticketnumber),body)

    }
    @Post('changeStatus/:ticketnumber')
    updateChangeRequest(@Param('ticketnumber') ticketnumber:string,@Body()body:changeStatusDto){
        return this.ticketService.update(parseInt(ticketnumber),body)
    }


}
