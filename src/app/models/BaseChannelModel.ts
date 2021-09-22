


import { BaseModel } from './BaseModel';

export class BaseChannelModel extends BaseModel {
    public name: string;
    public minDownline: number;
    public maxDownline: number;
    public active: boolean;
}