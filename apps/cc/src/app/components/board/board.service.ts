import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { DashboardItem, DashboardItemConfig, StorageKeys, } from "../../models";
import { DefaultDashboardConfig } from "../../config";
import { LocalStorageService } from "../../services/local-storage.service";
import { GridsterItem } from "angular-gridster2";


@Injectable()
export class BoardService {
  public readonly configs$ = new BehaviorSubject<Map<string, DashboardItemConfig>>(new Map<string, DashboardItemConfig>());
  public readonly configChanged$ = new Subject<string>();
  public readonly boardItems$ = new BehaviorSubject<DashboardItem[]>([]);

  constructor(private readonly localStorageService: LocalStorageService) {
    this.loadItems();
  }

  private loadItems(): void {
    const savedConfig = this.localStorageService.read(StorageKeys.DashboardItems);
    if (savedConfig) {
      this.boardItems$.next(savedConfig);
    } else {
      this.boardItems$.next(DefaultDashboardConfig);
    }
  }

  public getConfig(id: string): DashboardItemConfig | undefined {
    return this.configs$.getValue().get(id);
  }


  public updateConfig(id: string, config: DashboardItemConfig): void {
    const value = this.configs$.getValue();
    value.set(id, config);
    this.configs$.next(value);
    this.configChanged$.next(id);
    const items = this.boardItems$.getValue();
    const index = items.findIndex(dashboardItem => dashboardItem.id === id)
    if (index !== -1) {
      items[index].config = config;
      this.localStorageService.save(StorageKeys.DashboardItems, items);
      this.boardItems$.next(items);
    }
  }

  public updateItemCoordinates(item: GridsterItem): void {
    const items = this.boardItems$.getValue();
    if (!items) {
      return;
    }
    const index = items.findIndex(dashboardItem => dashboardItem.id === item['id']);
    if (index !== -1) {
      setTimeout(() => {
        const oldItem = items[index];
        const newItem = { ...oldItem, x: item.x, y: item.y, cols: item.cols, rows: item.rows };
        items[index] = newItem;        
        this.localStorageService.save(StorageKeys.DashboardItems, items);
        this.boardItems$.next(items);
      }, 200);
    }
  }

  public removeItem(itemToRemove: DashboardItem): void {
    const items = this.boardItems$.getValue();
    const index = items.findIndex(item => item.id === itemToRemove.id);
    if (index === -1) {
      return;
    }
    items.splice(index, 1);
    this.localStorageService.save(StorageKeys.DashboardItems, items);
    this.boardItems$.next(items);
  }

}
