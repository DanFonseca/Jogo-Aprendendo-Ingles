import { Component, OnInit, Input } from '@angular/core';
import {Coracao} from '../shared/coracao.model';
import {Coracoes} from './coracao-mock';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  @Input() coracoes: Coracao [] = Coracoes;

  //data-binding: Property-binding
  constructor() {
    console.log();
  }
  ngOnInit(): void {
  }
}
