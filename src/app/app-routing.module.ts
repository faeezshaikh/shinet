import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'folder/Inbox',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // }
  // ,
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'packagedetails/:id',
    loadChildren: () => import('./packagedetails/packagedetails.module').then( m => m.PackagedetailsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'listpackages',
    loadChildren: () => import('./listpackages/listpackages.module').then( m => m.ListpackagesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'addpackage',
    loadChildren: () => import('./addpackage/addpackage.module').then( m => m.AddpackagePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'balances',
    loadChildren: () => import('./balances/balances.module').then( m => m.BalancesPageModule)
  },
  {
    path: 'packagedetails',
    loadChildren: () => import('./packagedetails/packagedetails.module').then( m => m.PackagedetailsPageModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
