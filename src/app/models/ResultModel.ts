export class ResultModel {
    public pageIndex: number;
    public pageSize: number;
    public totalCount: number;
    public totalPages: number;
    public indexFrom: number;
    public items: any[];
    public hasPreviousPage: boolean;
    public hasNextPage: boolean;
}