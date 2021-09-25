import { BaseModel } from "./BaseModel";

export type DashboardModel = {
  size: number;
  price: number;
  name: string;
} & BaseModel;
