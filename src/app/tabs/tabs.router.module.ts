import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#homePageModule'
          }
        ]
      },
      {
        path: 'producto',
        children: [
          {
            path: '',
            loadChildren: '../producto/producto.module#productoPageModule'
          }
        ]
      },
      {
        path: 'contacto',
        children: [
          {
            path: '',
            loadChildren: '../contacto/contacto.module#contactoPageModule'
          }
        ]
      },
      {
        path: 'cuartavista',
        children: [
          {
            path: '',
            loadChildren: '../cuartavista/cuartavista.module#cuartavistaPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}


//rutas de las vistas tabs