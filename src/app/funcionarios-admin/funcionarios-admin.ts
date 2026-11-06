
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionarios-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './funcionarios-admin.html',
  styleUrl: './funcionarios-admin.css'
})
export class FuncionariosAdmin {

  funcionarios: any[] = [];

  pesquisa: string = '';

  get funcionariosFiltrados() {

    return this.funcionarios.filter(funcionario =>
      funcionario.nome.toLowerCase().includes(this.pesquisa.toLowerCase()) ||
      funcionario.cpf.toString().includes(this.pesquisa)
    );

  }

  funcionarioSelecionado: any = null;

  visualizarFuncionario(funcionario: any) {
    this.funcionarioSelecionado = funcionario;
  }

  fecharVisualizacao() {
    this.funcionarioSelecionado = null;
  }

}
