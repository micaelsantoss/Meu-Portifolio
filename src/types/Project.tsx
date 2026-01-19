export interface Project {
  id: number;
  title: string;
  description: string;
  completeDescription?: DescriptionProps;
  techs: string[];
  image: string;
  // opcionais para evoluir depois
  githubUrl?: string;
  liveUrl?: string;
  url?: string;
  images?: object
  videos?: object
}

interface DescriptionProps{
  intro: string;
  features?: string[];
}