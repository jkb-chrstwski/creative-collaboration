import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DashboardItem,  } from "../../models";
import { DefaultDashboardConfig } from "../../config";




@Injectable()
export class BoardService {

  public readonly boardItems$ = new BehaviorSubject<DashboardItem[]>([]);

  constructor() {
    this.loadItems();
  }


  private loadItems(): void {
    this.boardItems$.next(DefaultDashboardConfig);
  }

}
