


import { BaseModel } from './BaseModel';
import { UserModel } from './UserModel';

export class SettingModel extends BaseModel {
    public key: string;
    public value: string;
    public inputType: string;
    public isEditable: boolean;
    public editorId: number;
    public editor: UserModel;
}