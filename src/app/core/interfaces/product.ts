export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
export const categoryInitialization:Category = {
    id: 0,
        name: 'string',
        image: 'string',
        creationAt: 'string',
        updatedAt: 'string',
}
export const productInitialization:Product = {
    id: 0,
      title: '',
      price: 0,
      description: '',
      images: [],
      creationAt: 'string',
      updatedAt: 'string',
      category: categoryInitialization

}