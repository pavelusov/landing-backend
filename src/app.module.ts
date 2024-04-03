import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstStepService } from './steps/first-step/first-step.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FirstStepService],
})
export class AppModule {}
