import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { BoardService } from './board.service';
import { DashboardItemType } from '../../models';

@Component({
  selector: 'org-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [BoardService]
})
export class BoardComponent {

  public readonly DashBoardItemType = DashboardItemType;

  public readonly options: GridsterConfig = {
    gridType: 'verticalFixed',
    fixedRowHeight: (window.innerHeight - 100) / 30,
    resizable: {
      enabled: true,

    },
    draggable: {
      enabled: true,
      delayStart: 500,
    },
    allowMultiLayer: true,
    baseLayerIndex: 0,
    itemChangeCallback: this.itemChanged.bind(this)
  };

  public readonly boardItems$ = this.boardService.boardItems$.asObservable();

  constructor(private readonly boardService: BoardService) {
  }
  
  public itemChanged(item: GridsterItem): void {
    const items = this.boardService.boardItems$.getValue();
    if (!items) {
      return;
    }
    const index = items.findIndex(dashboardItem => dashboardItem.id === item['id']);
    if (index !== -1) {
      setTimeout(() => {
        const oldItem = items[index];
        const newItem = { ...oldItem, x: item.x, y: item.y, cols: item.cols, rows: item.rows };
        items[index] = newItem;        
        this.boardService.boardItems$.next(items);
      }, 200);
    }
  }

}
