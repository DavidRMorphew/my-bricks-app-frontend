export type Part = {
  color: string;
  id: number;
  imageUrl: string | null;
  name: string;
  partNumber: string;
};

export type SetPartSpec = {
  legoSetId: number;
  partId: number;
  partQuantity: number;
};
