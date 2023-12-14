export type Part = {
  color: string;
  id: number;
  imageUrl: string;
  name: string;
  partNumber: string;
};

export type SetPartSpec = {
  id: number;
  legoSetId: number;
  partId: number;
  partQuantity: number;
};
