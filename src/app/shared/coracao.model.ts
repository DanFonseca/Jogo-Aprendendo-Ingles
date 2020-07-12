export class Coracao {

  public endereco: string;
  public vazio: boolean;


  constructor (deixarVazio: boolean) {
    deixarVazio ? this.setVazio() : this.setCheio()
  }

  setVazio () : void {
    this.endereco = './assets/coracao_vazio.png';
    this.vazio = true;
  }

  setCheio (): void {
    this.endereco = './assets/coracao_cheio.png';
    this.vazio = false;
  }

}
