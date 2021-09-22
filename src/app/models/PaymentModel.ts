import { PaymentMethodEnum } from "./Enum/PaymentMethodEnum";

export class PaymentModel {
    public userId: number;
    public walletId: number;
    public paymentReference: string;
    public amount: number;
    public paymentMethod: PaymentMethodEnum;
    public paymentChannel: string;
    public transactionPin: string;
    public paymentCardId: number;
    public fromAdmin: boolean = false;
    public adminUserId: boolean = false;
}