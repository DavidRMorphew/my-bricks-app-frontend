export type LegoSet = {
  id: number;
  imageUrl: string;
  instructionsUrl: string;
  name: string;
  owned: boolean;
  setNumber: string;
  themeName: string;
  totalBricks: number;
  year: string;
};

export type LegoSetProps = {
  legoSet: LegoSet;
  changeOwnedSetStatus: (id: number) => void;
};
