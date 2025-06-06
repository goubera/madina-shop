import { supabase } from './supabaseClient';

export async function getProducts() {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('getProducts error', error);
    return [];
  }
  return data || [];
}

export async function addProduct(product) {
  const { data, error } = await supabase.from('products').insert([product]);
  if (error) {
    console.error('addProduct error', error);
  }
  return data ? data[0] : null;
}

export async function deleteProduct(id) {
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) {
    console.error('deleteProduct error', error);
  }
  return !error;
}
