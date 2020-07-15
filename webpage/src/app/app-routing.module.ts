import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'wiki/home',
    pathMatch:'full'
  },
  {
    path:'wiki',
    redirectTo:'wiki/home',
    pathMatch:'full'
  },
  {
    path: '**',
    loadChildren: () => import('./wiki/wiki.module').then( m => m.WikiPageModule),
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
