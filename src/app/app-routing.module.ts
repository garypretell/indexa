import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequireUnauthGuard, EditorGuard, AdminGuard } from './auth/guards';
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
    canActivate: [EditorGuard],
    resolve: { sede: SedeResolverGuard}
  },
  {
    path: 'Chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
    canActivate: [AdminGuard],
    // resolve: { chats: ChatResolverGuard}
  },
  {
    path: 'chats/:id',
    loadChildren: () => import('./chat-user/chat-user.module').then(m => m.ChatUserModule),
    canActivate: [AdminGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./not-found-component/not-found.module').then(m => m.NotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
