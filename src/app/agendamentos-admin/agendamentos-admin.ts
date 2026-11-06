
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agendamentos-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendamentos-admin.html',
  styleUrl: './agendamentos-admin.css'
})
export class AgendamentosAdmin {

  agendamentos: any[] = [];

  pesquisa: string = '';

  filtroStatus: string = '';

  get agendamentosFiltrados() {
    return this.agendamentos.filter(agendamento => {

      const correspondePesquisa =
        agendamento.cliente.toLowerCase().includes(this.pesquisa.toLowerCase()) ||
        agendamento.servico.toLowerCase().includes(this.pesquisa.toLowerCase());

      const correspondeStatus =
        this.filtroStatus === '' ||
        agendamento.status === this.filtroStatus;

      return correspondePesquisa && correspondeStatus;
    });
  }

  agendamentoSelecionado: any = null;

  visualizarAgendamento(agendamento: any) {
    this.agendamentoSelecionado = agendamento;
  }

  fecharVisualizacao() {
    this.agendamentoSelecionado = null;
  }

  atualizarStatus(agendamento: any, novoStatus: string) {
    agendamento.status = novoStatus;
  }
}
