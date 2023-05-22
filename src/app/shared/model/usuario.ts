import { Cliente } from "./cliente";
import { Conta } from "./conta";

export class Usuario {
  public cliente: Cliente;
  public conta: Conta;

  constructor(public id?: number,
              public username:string = '',
              public password: string = ''){
    this.cliente = new Cliente();
    this.conta = new Conta('', 0);
  }
}
