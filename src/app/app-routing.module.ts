import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ItemListModule } from './item-list/item-list.module';
import { SinglePageModule } from './single-page/single-page.module';

type RouteConfig = {
  [key: string]: string;
};

const routeConfig: RouteConfig = {
  itemList: 'item-list',
  singlePage: 'single-page'
};

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: routeConfig['itemList'],
        loadChildren: (): Promise<ItemListModule> =>
          import('./item-list/item-list.module').then(m => m.ItemListModule),
      },
      {
        path: routeConfig['singlePage'],
        loadChildren: (): Promise<SinglePageModule> =>
          import('./single-page/single-page.module').then(m => m.SinglePageModule),
      },
    ]
  },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
