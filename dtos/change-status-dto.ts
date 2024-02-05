import { IsIn, IsString } from "class-validator";

export class changeStatusDto{
    @IsString()
    @IsIn(['rejected', 'approved'], { message: 'Status must be either "rejected" or "approved"' })
    status:string;
}