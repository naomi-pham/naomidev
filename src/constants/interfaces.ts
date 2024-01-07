import { type ReactNode } from "react";

export interface IAccordionItem {
  id: number;
  title: string;
  content: ReactNode;
}

export interface ITabItem {
  id: number;
  label: string;
  title: string;
  content: string;
  component?: ReactNode;
}

export interface INewsletterFom {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IPortfolioCard {
  id: number;
  project: string;
  image: string;
}

export interface IServiceTabItem {
  id: number;
  label: string;
  title: string;
  component: JSX.Element;
}
