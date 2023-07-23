import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BoardComponent } from './components/board/board.component';
import { GridsterModule } from 'angular-gridster2';
import { WebViewComponent } from './components/board/board-items/web-view/web-view.component';
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [AppComponent, BoardComponent, WebViewComponent, SafePipe],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
