import { Component, OnInit } from '@angular/core';
import { arrayDefrases } from './frases-mock';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = arrayDefrases;
  public instrucao: string = 'Traduza a Frase';
  public palavraDigitadaPeloUsuario: string;

  public rodada: number = 0;
  public fraseDaRodada: Frase;

  public classePaiProgresso: number = 0;


  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {

  }

  //event binding
  //pegando os valores que são digitados pelo usuário na textArea
  verificaFrase(event: Event): void {
    this.palavraDigitadaPeloUsuario = (event.target as HTMLInputElement).value;
  }

  verificaPalavra(): void {
     if(this.rodada == this.frases.length) {
       console.log('chegou ao fim');
     }
     //verificando se o valor digitado corresponde a tradução.
    if (this.frases[this.rodada].frasePtBr.toLowerCase() == this.palavraDigitadaPeloUsuario.toLowerCase()) {
      //atualizando a rodada
        this.rodada ++;
        this.atualizaRodada();

      //incrementando a barra de progresso do elemenbto pai para o filho (@input())
        this.classePaiProgresso += (100/this.frases.length)
        console.log(this.fraseDaRodada);
    }else{
      alert('errado');
    }
  }

  atualizaRodada () : void {
    //atualizando a frase da rodada
      this.fraseDaRodada = this.frases[this.rodada];
    //utilizando property binding para limpar a text area
      this.palavraDigitadaPeloUsuario = ''
  }

}
