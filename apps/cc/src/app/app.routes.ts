import { Route } from '@angular/router';
import { BoardComponent } from './components/board/board.component';

export const appRoutes: Route[] = [
    {
        path: "",
        component: BoardComponent
    },
    {
        path: "monitor",
        component: BoardComponent
    }
];
