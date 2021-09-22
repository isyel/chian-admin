
export class PaymentPostModel {
    public userId: number;
    public walletId: number;
    public amount: number;
    public paymentMethod: string = "card";
    public paymentChannel: string;
    public transactionPin: string;
    public paymentReference: string;
    public paymentCardId: number;
}