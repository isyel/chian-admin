import { BaseModel } from "./BaseModel";

export type UserModel = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fullName: string;
  phoneNumber: string;
  password: string;
  refills: number;
  maintenances: number;
  email: string;
  vehicleNo: string;
  pricePackage: string;
  latitude: string;
  longitude: string;
  referralId: string;
  address: string;
  roles: [string];
  avatar: string;
} & BaseModel;

export type AuthDataModel = {
  session: string;
  isAuthenticated: boolean;
  userDetails: {
    userId: string;
    name: string;
    email: string;
    avatar?: string;
    phoneNumber: string;
    verificationStatus: boolean;
    userName: string;
    roles: [string];
  };
  userId: string;
  name: string;
  email: string;
  phoneNumber: string;
  verificationStatus: boolean;
  userName: string;
  roles: [string];
};
