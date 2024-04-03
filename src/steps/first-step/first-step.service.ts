import { Injectable } from '@nestjs/common';
import { FirstStep } from '../types';
import { data } from './data';

@Injectable()
export class FirstStepService {
  getFirstStep(): FirstStep[] {
    return data;
  }
}
