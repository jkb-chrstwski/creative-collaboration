import { GridsterItem } from "angular-gridster2";

export interface DashboardItem extends GridsterItem {
    id: string;
    config: any;
}

export enum DashboardItemType {
    WEB_VIEW = 'web-view'
}