export interface RoomModel {
  bathroom?: number;
  bedroom?: number;
}

export interface ProductModel {
  id: string | number;
  amount: number;
  title: string;
  location: string;
  description: string;
  image: string | any;
  info: {
    size: number;
    room: RoomModel;
  };
}
