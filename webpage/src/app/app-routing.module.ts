import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  
  {
    path: 'editor',
    loadChildren: () => import('./wikiPageEditComponents/wiki-page-edit/wiki-page-edit.module').then( m => m.WikiPageEditPageModule)
  },
  {
    path: 'editor/:id',
    loadChildren: () => import('./wikiPageEditComponents/wiki-page-edit/wiki-page-edit.module').then( m => m.WikiPageEditPageModule)
  },
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
    loadChildren: () => import('./wikiPageComponents/wiki/wiki.module').then( m => m.WikiPageModule),
  },

  

 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
