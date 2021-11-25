import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
import { ProfessorGuard } from './guards/professor.guard';
import { StudentGuard } from './guards/student.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule), canActivate:[NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule), canActivate:[NologinGuard]
  },
  {
    path: 'docentes',
    loadChildren: () => import('./pages/docentes/docentes.module').then( m => m.DocentesPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./pages/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'puntajes',
    loadChildren: () => import('./pages/puntajes/puntajes.module').then( m => m.PuntajesPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'grupos',
    loadChildren: () => import('./pages/grupos/grupos.module').then( m => m.GruposPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'libre',
    loadChildren: () => import('./pages/libre/libre.module').then( m => m.LibrePageModule)
  },
  {
    path: 'campania',
    loadChildren: () => import('./pages/campania/campania.module').then( m => m.CampaniaPageModule)
  },
  {
    path: 'fichas',
    loadChildren: () => import('./pages/fichas/fichas.module').then( m => m.FichasPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'actividades',
    loadChildren: () => import('./pages/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
