import {ReactNode} from 'react';

export type CustomButtonType = {
  title: string;
  onPress?: () => void;
}

export type LayoutType = {
  children?: ReactNode;
  isLogged?: boolean;
};

export type NavigationRoutesType = {
  children?: ReactNode;
}

export type ProductsType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: ProductRating;
};

type ProductRating = {
  rate: number;
  count: number;
};

export type TopbarType = {
  isLogged?: boolean;
};



