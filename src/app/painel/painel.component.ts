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
    this.fraseDaRodada = this.frases[this.rodada];
  }

  ngOnInit(): void {

  }

  //event binding
  verificaFrase(event: Event): void {
    this.palavraDigitadaPeloUsuario = (event.target as HTMLInputElement).value;
  }

  verificaPalavra(): void {
     if(this.rodada == this.frases.length) {
       console.log('chegou ao fim');
     }
    if (this.frases[this.rodada].frasePtBr.toLowerCase() == this.palavraDigitadaPeloUsuario.toLowerCase()) {
        this.rodada ++;
        this.fraseDaRodada = this.frases[this.rodada];
        this.classePaiProgresso += (100/this.frases.length)
        console.log(this.fraseDaRodada);
    }else{
      console.log('errado');
    }
  }

}
