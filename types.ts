export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: ImageType[]
};

export interface ImageType {
  id: string;
  url: string;
}

export interface BillboardType {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: BillboardType;
};

export interface Size {
  id: string;
  name: string;
  value: string;
};

export interface Color {
  id: string;
  name: string;
  value: string;
};