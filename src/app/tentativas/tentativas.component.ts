import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import {Coracao} from '../shared/coracao.model';
import {Coracoes} from './coracao-mock';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() coracoes: Coracao [] = Coracoes;

  //data-binding: Property-binding
  constructor() {
  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges){
  }

}
