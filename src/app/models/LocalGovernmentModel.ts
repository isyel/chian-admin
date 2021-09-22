


import { BaseModel } from './BaseModel';
import { StateModel } from './StateModel';

export class LocalGovernmentModel extends BaseModel {
    public stateId: number;
    public state: StateModel;
    public name: string;
}