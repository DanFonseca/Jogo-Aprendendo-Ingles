import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public jogoEmAndamento = true;
  public tipoEncerramento: string;

  encerraJogo(msg: string) {
    this.tipoEncerramento = msg;
    this.jogoEmAndamento = false;
  }

  jogarNovamente (): void {
    window.location.reload();
  }

}
