export type FirstStep = {
  id: number | string;
  category: TemplateCategory[];
  title: string;
  template: string;
  image: string;
};

export enum TemplateCategory {
  Manicurist = 'manicurist',
  Photographer = 'photographer',
}
