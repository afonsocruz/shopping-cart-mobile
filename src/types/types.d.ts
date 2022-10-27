import {ReactNode} from 'react';

export type LayoutType = {
  children?: ReactNode;
  isLogged?: boolean;
};

export type TopbarType = {
  isLogged?: boolean;
};

export type NavigationRoutesType = {
  children?: ReactNode;
}

export type CustomButtonType = {
  title: string;
  onPress?: () => void;
}