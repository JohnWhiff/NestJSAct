import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketingModule } from './ticketing/ticketing.module';
import { Ticket } from './ticketing/ticketing.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database:'db.sqlite',
      entities:[Ticket],
      synchronize:true
  }), 
    TicketingModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
