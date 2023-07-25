import { GridsterItem } from "angular-gridster2";

export interface DashboardItem extends GridsterItem {
    id: string;
    config: DashboardItemConfig;
    backgroundColor?:string;
}
export interface DashboardItemConfig{
    type: DashboardItemType;     
    [index: string]: any;
}

export enum DashboardItemType {
    WEB_VIEW = 'web-view'
}

export enum StorageKeys {
    DashboardItems = 'CCDashboardItems'
}