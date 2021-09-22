import { BaseModel } from "./BaseModel";
import { CompanyModel } from "./CompanyModel";
import { PostTypeEnum } from "./Enum/PostTypeEnum";
import { PlatformEnum } from "./Enum/PlatformEnum";
import { GenderEnum } from "./Enum/GenderEnum";
import { UserModel } from "./UserModel";

export class AdvertModel extends BaseModel {
  public userId: number;
  public user: UserModel;
  public companyId: number;
  public company: CompanyModel;
  public offerName: string;
  public postType: PostTypeEnum;
  public description: string;
  public offerType: string;
  public offerSource: PlatformEnum;
  public offerImage: string;
  public offerUrl: string;
  public noOfView: number;
  public offerAmount: number;
  public amountPerView: number;
  public duration: number;
  public offerStartDate: Date;
  public actualStartDate: Date;
  public actualEndDate: Date;
  public proposedEndDate: Date;
  public location: string;
  public city: string;
  public country: string;
  public latitude: number;
  public longitude: number;
  public ageGroup: string;
  public gender: GenderEnum;
  public dailyStartTime: string;
  public dailyClickLimit: number;
  public actualViewCount: number;
  public published: boolean;
  public publishedDate: Date;
  public data: string;
  public onSocialMedia: boolean;
  public status: string;
}

export class AdvertFormModel {
  public id: number;
  public userId: number;
  public offerName: string;
  public postType: PostTypeEnum;
  public description: string;
  public offerType: any;
  public offerSource: PlatformEnum;
  // public offerImageUpload: FormFile;
  public offerImageUpload: any;
  public offerUrl: string;
  public noOfView: number;
  public offerAmount: number;
  public amountPerView: number;
  public duration: number;
  public offerStartDate: Date;
  public offerEndDate: Date;
  public location: string;
  public city: string;
  public country: string;
  public latitude: number;
  public longitude: number;
  public ageGroup: string;
  public gender: GenderEnum;
  public dailyStartTime: string;
  public dailyClickLimit: number;
  public actualViewCount: number;
  public published: boolean;
  public publishedDate: Date;
  public data: string;
  public onSocialMedia: boolean;
  public pollOptions: string[];
}

export class AcceptOfferModel {
  public requestId: number;
  public providerId: number;
  public userId: number;
  public isAdmin: boolean;
}

export class CompleteRequestModel {
  public requestId: number;
  public providerId: number;
  public userId: number;
  public override: boolean;
}

export class CancelProjectModel {
  public requestId: number;
  public cancellationReason: string;
  public userId: number;
  public platform: PlatformEnum;
  public chargePenalty: boolean;
}
