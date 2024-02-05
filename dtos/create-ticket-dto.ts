import { IsString } from "class-validator";

export class CreateTicketDto{
    @IsString()
    subject:string;

    @IsString()
    body:string;

}