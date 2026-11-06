import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ProdutosAdmin } from './produtos-admin/produtos-admin';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'produtos',
    component: ProdutosAdmin
  }
];