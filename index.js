import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//cliente1 é instancia da classe Cliente
const cliente1 = new Cliente("Ricardo",11122233309);
//cada cliente é um objeto
const cliente2 = new Cliente("Alice", 88822233309);


const conta1= new ContaCorrente(1001, cliente1);
conta1.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);

conta1.transferir(200, conta2);

console.log(conta1);
console.log(cliente2);
console.log(ContaCorrente.numeroDeContas)
