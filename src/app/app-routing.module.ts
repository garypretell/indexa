import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequireUnauthGuard } from './auth/guards';
import { SedeResolverGuard } from './sede/sede-resolver.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [RequireUnauthGuard]
  },
  {
    path: 'Home',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify/verify.module').then(m => m.VerifyModule)
  },
  {
    path: 'proyecto',
    loadChildren: () => import('./proyecto/proyecto.module').then(m => m.ProyectoModule)
  },
  {
    path: 'proyecto/:p/sede',
    loadChildren: () => import('./sede/sede.module').then(m => m.SedeModule),
    // canActivate: [EditorGuard],
    resolve: { sede: SedeResolverGuard}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
