
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicos-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './servicos-admin.html',
  styleUrl: './servicos-admin.css'
})
export class ServicosAdmin {

  servicos: any[] = [];

  novoServico = {
    nome: '',
    descricao: '',
    valor: 0,
    duracao: 0
  };

  cadastrarServico() {

    if (
      !this.novoServico.nome.trim() ||
      !this.novoServico.descricao.trim() ||
      this.novoServico.valor <= 0 ||
      this.novoServico.duracao <= 0
    ) {
      alert('Preencha os campos corretamente!');
      return;
    }

    this.servicos.push({
      ...this.novoServico
    });

    alert('Serviço cadastrado com sucesso!');

    this.novoServico = {
      nome: '',
      descricao: '',
      valor: 0,
      duracao: 0
    };
  }

  editarServico(index: number) {

    this.novoServico = {
      ...this.servicos[index]
    };
  
    this.servicos.splice(index, 1);
  
  }
  
  excluirServico(index: number) {
  
    const confirmar = confirm(
      'Tem certeza que deseja excluir este serviço?'
    );
  
    if (confirmar) {
      this.servicos.splice(index, 1);
  
      alert('Serviço excluído com sucesso!');
    }
  
  }

}
