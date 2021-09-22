


import { BaseModel } from './BaseModel';
import { CountryModel } from './CountryModel';

export class StateModel extends BaseModel {
    public countryId: number;
    public country: CountryModel;
    public name: string;
    public operatingState: boolean;
}