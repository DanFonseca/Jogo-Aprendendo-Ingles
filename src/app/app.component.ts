import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public jogoEmAndamento = true;

  encerraJogo(msg: string) {
    console.log(msg);
    this.jogoEmAndamento = false;
  }

}
