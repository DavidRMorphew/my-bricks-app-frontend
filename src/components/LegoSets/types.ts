import { ReactNode } from "react";

export type LegoSet = {
  id: number;
  imageUrl: string;
  instructionsUrl: string;
  name: string;
  owned: boolean;
  setNumber: string;
  themeName: string;
  totalBricks: number;
  year: number;
};

export type LegoSetProps = {
  legoSet: LegoSet;
  children: ReactNode;
}