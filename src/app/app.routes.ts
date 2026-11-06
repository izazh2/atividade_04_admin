import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ProdutosAdmin } from './produtos-admin/produtos-admin';
import { ServicosAdmin } from './servicos-admin/servicos-admin';
import { ClientesAdmin } from './clientes-admin/clientes-admin';
import { FuncionariosAdmin } from './funcionarios-admin/funcionarios-admin';
import { PedidosAdmin } from './pedidos-admin/pedidos-admin';
import { AgendamentosAdmin } from './agendamentos-admin/agendamentos-admin';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'produtos',
    component: ProdutosAdmin
  },
  {
    path: 'servicos',
    component: ServicosAdmin
  },
  {
    path: 'clientes',
    component: ClientesAdmin
  },
  {
    path: 'funcionarios',
    component: FuncionariosAdmin
  },
  {
    path: 'pedidos',
    component: PedidosAdmin
  },
  {
    path: 'agendamentos',
    component: AgendamentosAdmin
  }
];