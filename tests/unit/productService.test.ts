import { createClient, SupabaseClient } from '@supabase/supabase-js';

jest.mock('@supabase/supabase-js');

// Require the service after mocking createClient
const productService = require('../../apps/shop/src/services/productService');

const mockFrom = jest.fn();
const mockSelect = jest.fn();

(createClient as jest.Mock).mockReturnValue({
  from: mockFrom,
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('productService', () => {
  test('getProducts returns array from Supabase', async () => {
    mockFrom.mockReturnValueOnce({
      select: mockSelect.mockResolvedValueOnce({ data: [{ id: 1 }], error: null }),
    });

    const result = await productService.getProducts();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([{ id: 1 }]);
  });

  test('getProductById returns null when no rows', async () => {
    mockFrom.mockReturnValueOnce({
      select: mockSelect.mockResolvedValueOnce({ data: [], error: null }),
    });

    const result = await productService.getProductById(999);
    expect(result).toBeNull();
  });
});
