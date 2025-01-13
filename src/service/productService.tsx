import { allProducts, categories } from '@utils/mockData';
import { Category } from 'types/categories';
import { Product } from 'types/product';

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categories);
      }, 2000);
    });
  } catch (error) {
    console.log('Error Categories', error);
    return [];
  }
};

export const getProductsByCategory = async (id: string): Promise<Product[]> => {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = allProducts.filter((el: any) => el.id === id).map((product: any) => ({
          ...product,
          badges: null,
        }));
        resolve(data);
      }, 1000);
    });
  } catch (error) {
    console.log('Error Categories', error);
    return [];
  }
};
