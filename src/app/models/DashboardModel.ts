import { BaseModel } from "./BaseModel";

export type DashboardModel = {
  wallet: number;
  users: number;
  orders: number;
} & BaseModel;
