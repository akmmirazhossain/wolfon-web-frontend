export interface Product {
  id: string;
  name: string;
  category: string;
  tag: 'MUST-HAVE' | 'PREMIUM' | 'VERSATILE' | 'ESSENTIAL';
  image: string;
  description: string;
  gsm: number;
  fabric: string;
  fit: string;
  moq: string;
  leadTime: string;
  sampleAvailable: boolean;
  customization: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  inStock: boolean;
}

export interface UpcomingDrop {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
  releaseDate: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryItem {
  product: Product;
  estimatedQuantity: number;
  selectedColor?: string;
  customNotes?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
