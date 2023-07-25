import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, tap } from 'rxjs';

import { DashboardItem, DashboardItemType } from '../../../models';
import { BoardService } from '../board.service';

@UntilDestroy()
@Component({
  selector: 'org-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  @Input() item!: DashboardItem;
  public readonly DashboardItemType = DashboardItemType;
  public config!: any;
  private timeout?: NodeJS.Timeout;
  public showNavigation = false;
  public halfVisibleNavigation = false;
  constructor(
    private readonly boardService: BoardService,
    private readonly cdr: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.config = this.item.config;    
    this.boardService.configChanged$
      .pipe(
        filter((id => id === this.item.id)),
        tap((id) => {
          const currentConfig = this.boardService.getConfig(id);
          if (!currentConfig) {
            return;
          }
          this.config = { ...currentConfig };
          this.cdr.markForCheck();
        }),
        untilDestroyed(this))
      .subscribe();
  }


  public configChanged(config: any): void {
    this.boardService.updateConfig(this.item.id, config);
  }

  public startTimeout(): void {
    this.halfVisibleNavigation = true;
    this.timeout = setTimeout(() => {
      this.halfVisibleNavigation = false;
      this.showNavigation = true;
    }, 1000)
  }

  public cancelTimeout(): void {
    if (this.timeout) {
      this.halfVisibleNavigation = false;
      this.showNavigation = false;
      clearTimeout(this.timeout);
    }
  }

  public hideNavigation(): void {
    this.halfVisibleNavigation = false;
    this.showNavigation = false;
  }

  public removeItem(): void {
    this.boardService.removeItem(this.item);
  }
}

