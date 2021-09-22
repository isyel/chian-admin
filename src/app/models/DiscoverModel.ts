import { PostTypeEnum } from "./Enum/PostTypeEnum";
import { PollOptionMiniModel } from "./PollOptionModel";

export class DiscoverModel {
    public id: number;
    public title: string;
    public postType: PostTypeEnum;
    public description: string;
    public imageUrl: string;
    public imageThumb: string;
    public offerUrl: string;
    public viewCounts: number;
    public posterScreenName: string;
    public posterPhoto: string;
    public data: DiscoverStatisticsModel;
    public pollOption: PollOptionMiniModel[];
    public location: string;
    public longitude: number;
    public latitude: number;
    public pubishedDate: Date;
}

export class DiscoverStatisticsModel {
    public likeCount: number;
    public dislikeCount: number;
    public liked: boolean;
    public disliked: boolean;
    public commentCount: number;
}
