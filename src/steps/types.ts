export type FirstStep = {
  id: number | string;
  category: TemplateCategory[];
  title: string;
  url: string;
  image: string;
};

export enum TemplateCategory {
  Manicurist = 'manicurist',
  Photographer = 'photographer',
}
