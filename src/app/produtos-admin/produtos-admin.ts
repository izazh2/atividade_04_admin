
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './produtos-admin.html',
  styleUrl: './produtos-admin.css'
})
export class ProdutosAdmin {

  produtos: any[] = [];

  novoProduto = {
    nome: '',
    descricao: '',
    preco: 0,
    quantidade: 0
  };

  cadastrarProduto() {

    if (
      !this.novoProduto.nome.trim() ||
      !this.novoProduto.descricao.trim() ||
      this.novoProduto.preco <= 0 ||
      this.novoProduto.quantidade < 0
    ) {
      alert('Preencha os campos corretamente!');
      return;
    }

    this.produtos.push({
      ...this.novoProduto
    });

    alert('Produto cadastrado com sucesso!');

    this.novoProduto = {
      nome: '',
      descricao: '',
      preco: 0,
      quantidade: 0
    };
  }

  editarProduto(index: number) {

    this.novoProduto = {
      ...this.produtos[index]
    };
  
    this.produtos.splice(index, 1);
  
  }

  excluirProduto(index: number) {

    const confirmar = confirm(
      'Tem certeza que deseja excluir este produto?'
    );
  
    if (confirmar) {
      this.produtos.splice(index, 1);
  
      alert('Produto excluído com sucesso!');
    }
  
  }

}
