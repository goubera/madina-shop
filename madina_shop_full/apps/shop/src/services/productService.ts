import { supabase } from './supabaseClient';

export interface Product {
  id?: number;
  nom: string;
  prix: string;
  image?: string;
}

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('getProducts error', error);
    return [];
  }
  return (data as Product[]) || [];
}

export async function addProduct(product: Product): Promise<Product | null> {
  const { data, error } = await supabase.from('products').insert([product]);
  if (error) {
    console.error('addProduct error', error);
  }
  return (data ? (data[0] as Product) : null);
}

export async function deleteProduct(id: number): Promise<boolean> {
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) {
    console.error('deleteProduct error', error);
  }
  return !error;
}
