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
    url: 'https://linebyline.ru/template/01',
    category: [TemplateCategory.Manicurist],
    image: 'order/templates/template-bg-01.webp',
  },
  {
    id: 2,
    title: 'Шаблон 2',
    url: 'https://linebyline.ru/template/02',
    category: [TemplateCategory.Manicurist],
    image: 'order/templates/template-bg-02.webp',
  },
  {
    id: 3,
    title: 'Шаблон 3',
    url: 'https://linebyline.ru/template/03',
    category: [TemplateCategory.Photographer],
    image: 'order/templates/template-bg-03.webp',
  },
  {
    id: 4,
    title: 'Шаблон 4',
    url: 'https://linebyline.ru/template/04',
    category: [TemplateCategory.Photographer],
    image: 'order/templates/template-bg-04.webp',
  },
];
