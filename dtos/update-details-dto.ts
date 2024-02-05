import { IsString,IsOptional } from "class-validator";

export class updateDetailsDto{

    @IsString()
    @IsOptional()
    subject:string;

    @IsString()
    @IsOptional()
    body:string;


}