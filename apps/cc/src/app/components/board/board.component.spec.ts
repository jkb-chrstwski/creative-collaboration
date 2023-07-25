import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';
import { BoardService } from './board.service';
import { DashboardItem } from '../../models';
import { DefaultDashboardConfig } from '../../config';
import { BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { GridsterItemComponent, GridsterModule } from 'angular-gridster2';
import { CommonModule } from '@angular/common';
import { WebViewComponent } from './board-items/web-view/web-view.component';
import { SafePipe } from '../../pipes/safe.pipe';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent, WebViewComponent, SafePipe],
      imports: [CommonModule, GridsterModule],
      providers: [
        {
          provide: BoardService, useValue: {
            boardItems$: new BehaviorSubject<DashboardItem[]>(DefaultDashboardConfig)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should renderBoardItems', () => {
    const items = fixture.debugElement.queryAll(By.directive(GridsterItemComponent));
    expect(items.length).toEqual(DefaultDashboardConfig.length);
  });


});
