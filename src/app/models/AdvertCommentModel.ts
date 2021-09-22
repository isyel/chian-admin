


import { BaseModel } from './BaseModel';
import { AdvertModel } from './AdvertModel';
import { UserModel } from './UserModel';

export class AdvertCommentModel extends BaseModel {
    public advertId: number;
    public advert: AdvertModel;
    public userId: number;
    public user: UserModel;
    public comment: string;
    public reply: AdvertCommentModel[];
    public replyCount: number;
}

export class CommentFormModel {
    public advertId: number;
    public parentId: number;
    public userId: number;
    public comment: string;
}