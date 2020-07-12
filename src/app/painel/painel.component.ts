import { Component, OnInit } from '@angular/core';
import { arrayDefrases } from './frases-mock';
import { Frase } from '../shared/frase.model';
import {Coracao} from '../shared/coracao.model';
import {Coracoes} from '../tentativas/coracao-mock';


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
  public classePaiCoracoes:  Coracao [];
  public tentivas: number = 0;

  constructor() {
    this.atualizaRodada();
    this.classePaiCoracoes = Coracoes.slice();
  }

  ngOnInit(): void {

  }

  //event binding pegando os valores que são digitados pelo usuário na textArea

  verificaFrase(event: Event): void {
    this.palavraDigitadaPeloUsuario = (event.target as HTMLInputElement).value;
  }

  verificaPalavra(): void {
     //verificando se o valor digitado corresponde a tradução.
    if (this.frases[this.rodada]
      .frasePtBr
      .toLowerCase() ==
      this.palavraDigitadaPeloUsuario
      .toLowerCase()) {

        this.rodada ++;
        if(this.verificaSeGanhou()) console.log('Parabéns, vc ganhou ! =)');
        this.atualizaRodada();

      //incrementando a barra de progresso do elemenbto pai para o filho (@input())
        this.classePaiProgresso += (100/this.frases.length);

    }else{
      if(this.verificaCoracoesVazios()){
        console.log('Voce perdeu!');
      }
      this.classePaiCoracoes[this.tentivas].setVazio();
      this.tentivas++
    }
  }

  atualizaRodada () : void {
            //atualizando a frase da rodada
      this.fraseDaRodada = this.frases[this.rodada];
            //utilizando property binding para limpar a text area
      this.palavraDigitadaPeloUsuario = ''
  }

  verificaSeGanhou () : boolean {
    return this.rodada == this.frases.length ? true : false;
  }

  verificaCoracoesVazios ()  {
     let estaVazio =  this.classePaiCoracoes.map(x => x.vazio).reduce((acc, next) => {
      return acc && next;
     })

     return estaVazio;
  }
}
