import {Component} from '@angular/core';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
  //template: `<p>Testando interno</p>`
})

export class TopoComponent {
  public titulo: string = 'Aprendendo Inglês'; //data-binding: string interpolation
}
