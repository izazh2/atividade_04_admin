import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes-admin.html',
  styleUrl: './clientes-admin.css'
})
export class ClientesAdmin {

  clientes: any[] = [];

  pesquisa: string = '';

  get clientesFiltrados() {

    return this.clientes.filter(cliente =>
      cliente.nome.toLowerCase().includes(this.pesquisa.toLowerCase()) ||
      cliente.cpf.toString().includes(this.pesquisa)
    );

  }

  clienteSelecionado: any = null;

visualizarCliente(cliente: any) {
  this.clienteSelecionado = cliente;
}

fecharVisualizacao() {
  this.clienteSelecionado = null;
}

}
