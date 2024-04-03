import { FirstStep, TemplateCategory } from '../types';
import {
  templateImage01,
  templateImage02,
  templateImage03,
  templateImage04,
} from './images';

export const data: FirstStep[] = [
  {
    id: 1,
    title: 'Шаблон 1',
    template: 'https://linebyline.ru/template/01',
    category: [TemplateCategory.Manicurist],
    image: templateImage01,
  },
  {
    id: 2,
    title: 'Шаблон 2',
    template: 'https://linebyline.ru/template/02',
    category: [TemplateCategory.Manicurist],
    image: templateImage02,
  },
  {
    id: 3,
    title: 'Шаблон 3',
    template: 'https://linebyline.ru/template/03',
    category: [TemplateCategory.Photographer],
    image: templateImage03,
  },
  {
    id: 4,
    title: 'Шаблон 4',
    template: 'https://linebyline.ru/template/04',
    category: [TemplateCategory.Photographer],
    image: templateImage04,
  },
]