import { IOrder } from '../../../models/IOrder';

export interface CardsTypes {
  items: IOrder[];
  isLoading: boolean;
  count: null | number;
  error: string;
  openOrder: null | IOrder;
  createOrderModal: boolean;
  deleteOrderItem: IOrder | null;
}
export interface IFetchOrders {
  items: IOrder[];
  count: number;
}
