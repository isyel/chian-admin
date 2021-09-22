import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BlacklistFormModel } from "src/app/models/AdvertBlacklistModel";
import { AdvertModel, AdvertFormModel } from "src/app/models/AdvertModel";
import { ResultModel } from "src/app/models/ResultModel";
import { ApiService } from "../api.service";

/**
 *  Helper class for advertService methods
 *
 * @export
 * @class AdvertsService
 */
@Injectable({
  providedIn: "root",
})
export class AdvertsService {
  _actionUrl = "Adverts/";
  _blacklistActionUrl = "AdvertBlacklists/";
  _commentsActionUrl: string = "AdvertComments/";
  data: AdvertModel[];
  advertDetails: AdvertModel;

  constructor(public _service: ApiService) {
    _service.actionUrl = this._actionUrl;
  }

  /**
   * Gets all adverts
   *
   * @param {number} pageNumber
   * @returns ResultModel
   * @memberof AdvertsService
   */
  public getAll(pageNumber: number = 0, searchTerm: string = null) {
    this._service.setActionUrl(this._actionUrl);
    return this._service.getAllPaginate<ResultModel>(pageNumber, searchTerm);
  }

  /**
   * Gets advert full details using advert ID
   *
   * @param {number} advertId
   * @returns AdvertModel
   * @memberof AdvertsService
   */
  public getById(advertId: number) {
    if (advertId == undefined || advertId == null) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.getById<AdvertModel>(advertId);
    }
  }

  /**
   * Gets advert full details using user ID
   *
   * @param {number} userId
   * @returns AdvertModel[]
   * @memberof AdvertsService
   */
  public getByUser(userId: number) {
    if (userId == undefined || userId == null) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._actionUrl, "GetByUser/" + userId);
      return this._service.getAll<AdvertModel[]>();
    }
  }

  /**
   * Gets advert full details using company ID
   *
   * @param {number} companyId
   * @returns AdvertModel[]
   * @memberof AdvertsService
   */
  public getByCompany(
    companyId: number,
    pageNumber: number = 0,
    searchTerm = ""
  ) {
    if (companyId == undefined || companyId == null) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._actionUrl, "GetByCompany/" + companyId);
      return this._service.getAllPaginate<AdvertModel[]>(
        pageNumber,
        searchTerm
      );
    }
  }

  /**
   * Create a new Advert
   *
   * @param {AdvertOptions} postData
   * @returns any
   * @memberof AdvertsService
   */
  public create(postData: FormData) {
    if (postData == undefined || postData == null) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.postWithHeaders<any>(postData);
    }
  }

  /**
   * Publish an Advert
   *
   * @param {number} advertId
   * @returns any
   * @memberof AdvertsService
   */
  public publish(advertId: number) {
    if (advertId == undefined || advertId == null) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "Publish" + advertId);
      return this._service.post<any>(advertId);
    }
  }

  /**
   * Increment advert view count
   *
   * @param {number} advertId
   * @param {any} postData
   * @returns any
   * @memberof AdvertsService
   */
  public addViewCounts(advertId: number, postData: any) {
    if (!advertId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "add_view_counts/");
      return this._service.update<any>(advertId, postData);
    }
  }

  /**
   * Get overall view count for an advert
   *
   * @param {number} advertId
   * @returns any
   * @memberof AdvertsService
   */
  public getViews(advertId: number) {
    if (!advertId) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._actionUrl, "get-views/");
      return this._service.getById<any>(advertId);
    }
  }

  /**
   * Add a poll vote
   *
   * @param {any} postData
   * @returns any
   * @memberof AdvertsService
   */
  public pollVote(postData: any) {
    if (postData == undefined || postData == null) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "poll-vote");
      return this._service.post<any>(postData);
    }
  }

  /**
   * Like or Dislike an advert
   *
   * @param {any} postData
   * @returns any
   * @memberof AdvertsService
   */
  public reactions(postData: any) {
    if (!postData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl, "like-dislike");
      return this._service.post<any>(postData);
    }
  }

  /**
   * Edit an Advert
   *
   * @param {number} advertId
   * @param {AdvertOptions} postData
   * @returns any
   * @memberof AdvertsService
   */
  public edit(advertId: number, postData: FormData) {
    if (!postData || !advertId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.update<any>(advertId, postData);
    }
  }

  /**
   * Delete an Advert
   *
   * @param {number} advertId
   * @param {AdvertOptions} postData
   * @returns any
   * @memberof AdvertsService
   */
  public delete(advertId: number) {
    if (!advertId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._actionUrl);
      return this._service.delete<any>(advertId);
    }
  }

  /**
   * Get comments for an advert
   *
   * @param {number} advertId
   * @returns any
   * @memberof AdvertsService
   */
  public getComments(advertId: number) {
    if (!advertId) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._commentsActionUrl, "GetComments/");
      return this._service.getById<any>(advertId);
    }
  }

  /**
   * Get replies for a comment
   *
   * @param {number} advertId
   * @returns any
   * @memberof AdvertsService
   */
  public getReplies(advertId: number) {
    if (!advertId) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._commentsActionUrl, "GetReplies/");
      return this._service.getById<any>(advertId);
    }
  }

  /**
   * Add comment to an Advert
   *
   * @param {any} PostData
   * @returns any
   * @memberof AdvertsService
   */
  public addComment(PostData: any) {
    if (!PostData) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._commentsActionUrl);
      return this._service.post<any>(PostData);
    }
  }

  /**
   * Delete a comment on an Advert
   *
   * @param {number} advertId
   * @returns any
   * @memberof AdvertsService
   */
  public deleteComment(advertId: number) {
    if (!advertId) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._commentsActionUrl);
      return this._service.delete<any>(advertId);
    }
  }

  //Blacklisting
  public getAdvertBlacklist(advertId: number) {
    if (!advertId) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._blacklistActionUrl, "GetByAdvert/");
      return this._service.getById<any>(advertId);
    }
  }

  public addToBlacklist(PostData: BlacklistFormModel) {
    if (!PostData) {
      return this._service.handleError("Invalid Request");
    } else {
      this._service.setActionUrl(this._blacklistActionUrl);
      return this._service.post<any[]>(PostData);
    }
  }

  public deleteBlacklist(id: number) {
    if (!id) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      this._service.setActionUrl(this._blacklistActionUrl);
      return this._service.delete<any>(id);
    }
  }

  public unPublishAdvert<T>(id: number, PostData: AdvertFormModel) {
    this._service.actionUrl = this._actionUrl + "un_publish/";
    if (!id) {
      return Observable.throw({
        status: false,
        message: "Invalid Request Data",
      });
    } else {
      return this._service.update<any>(id, PostData);
    }
  }

  saveAdvertDetails(PostData) {
    this.advertDetails.id = PostData.data.id;
    this.advertDetails.offerAmount = PostData.data.offer_amount;
    this.advertDetails.offerImage = PostData.data.offer_image.thumbnail;
    this.advertDetails.offerName = PostData.data.offer_name;
    this.advertDetails.userId = PostData.data.userId;
  }
}
