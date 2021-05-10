import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // root path
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Mooon',
      module: 'home',
      // cache: true,
    },
    resolve: {
      //
    }
  },

  {
    path: 'post',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule),
    data: {
      title: 'About Us',
      module: 'about-us',
    },
  },

  // re-route for non-matches routes =========
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
