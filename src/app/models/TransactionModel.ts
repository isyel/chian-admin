import { BaseModel } from "./BaseModel";
import { OrderModel } from "./OrderModel";
import { PaymentModel } from "./PaymentModel";
import { UserModel, VendorModel } from "./UserModel";

export type TransactionModel = {
  transactionId: string;
  transationId: string;
  transactionAmount: number;
  agentDetails: UserModel;
  clientDetails: UserModel;
  orderDetails: OrderModel;
  vendorDetails: VendorModel;
  paymentDetails: PaymentModel;
  shippingDetails: any;
} & BaseModel;
