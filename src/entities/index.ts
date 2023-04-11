export type Item = {
  brand: number;
  id: number;
  image: string;
  regular_price: {
    currency: string;
    value: number;
  };
  sku: string;
  title: string;
  type: string;
};
