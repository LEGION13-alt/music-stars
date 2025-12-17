export interface Service {
  id: number;
  title: string;
  description: string;
  ageGroup: string;
  image:string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ContactInfo {
  location: string;
  instagram?: string;
}