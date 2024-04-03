import { Controller, Get } from '@nestjs/common';
import { FirstStepService } from './steps/first-step/first-step.service';
import { FirstStep } from './steps/types';

@Controller()
export class AppController {
  constructor(private readonly firstStepService: FirstStepService) {}

  @Get('/first-step')
  firstStep(): FirstStep[] {
    return this.firstStepService.getFirstStep();
  }
}
