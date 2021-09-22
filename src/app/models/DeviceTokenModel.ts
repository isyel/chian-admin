


import { BaseModel } from './BaseModel';
import { PlatformEnum } from './Enum/PlatformEnum';
import { UserModel } from './UserModel';

export class DeviceTokenModel extends BaseModel {
    public appType: PlatformEnum;
    public userId: number;
    public user: UserModel;
    public token: string;
    public uuid: string;
    public deviceData: string;
    public isEnabled: boolean;
}

export class DeviceTokenFormModel {
    public appType: PlatformEnum;
    public userId: number;
    public token: string;
    public uuid: string;
    public deviceData: string;
    public isEnabled: boolean;
}

export class DevicePauseModel {
    public appType: PlatformEnum;
    public userId: number;
    public uuid: string;
    public status: boolean;
}