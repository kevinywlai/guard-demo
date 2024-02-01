import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {MainComponent} from "./main/main.component";
import {authorizeGuard} from "./authorize.guard";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'page1',
    component: Page1Component,
    canActivate: [authorizeGuard]
  },
  {
    path: 'page2',
    component: Page2Component,
    canActivate: [authorizeGuard]
  },
];
