
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos-admin.html',
  styleUrl: './pedidos-admin.css'
})
export class PedidosAdmin {

  pedidos: any[] = [];

  pesquisa: string = '';

  filtroStatus: string = '';

  get pedidosFiltrados() {
    return this.pedidos.filter(pedido => {
      const correspondePesquisa =
        pedido.cliente.toLowerCase().includes(this.pesquisa.toLowerCase()) ||
        pedido.numero.toString().includes(this.pesquisa);

      const correspondeStatus =
        this.filtroStatus === '' ||
        pedido.status === this.filtroStatus;

      return correspondePesquisa && correspondeStatus;
    });
  }

  pedidoSelecionado: any = null;

  visualizarPedido(pedido: any) {
    this.pedidoSelecionado = pedido;
  }

  fecharVisualizacao() {
    this.pedidoSelecionado = null;
  }

  atualizarStatus(pedido: any, novoStatus: string) {
    pedido.status = novoStatus;
  }
}
