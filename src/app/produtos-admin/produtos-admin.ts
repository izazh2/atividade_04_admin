import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos-admin',
  standalone: true,
  imports: [],
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
      !this.novoProduto.nome ||
      !this.novoProduto.descricao ||
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

}