import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ItemListModule } from './item-list/item-list.module';
import { SinglePageModule } from './single-page/single-page.module';
import { HelpModule } from './help/help.module';

type RouteConfig = {
  [key: string]: string;
};

const routeConfig: RouteConfig = {
  itemList: 'pokemons',
  singlePage: 'detalhes',
  help: 'ajuda'
};

const routes: Routes = [
  {
    path: '',
    redirectTo: routeConfig['itemList'],
    pathMatch: 'full'
  },
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
      {
        path: routeConfig['help'],
        loadChildren: (): Promise<HelpModule> =>
          import('./help/help.module').then(m => m.HelpModule),
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
