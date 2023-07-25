import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GridsterModule } from 'angular-gridster2';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BoardComponent } from './components/board/board.component';
import { WebViewComponent } from './components/board/board-items/web-view/web-view.component';
import { SafePipe } from './pipes/safe.pipe';
import { BoardItemComponent } from './components/board/board-item/board-item.component';


@NgModule({
  declarations: [AppComponent, BoardComponent, WebViewComponent, SafePipe, BoardItemComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
