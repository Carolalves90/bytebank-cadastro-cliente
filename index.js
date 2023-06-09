import { Cliente } from "./cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900)
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Ricardo", 5000, 12378945601)
gerente.cadastrarSenha("12378945601")
const cliente = new Cliente("Lais", 41363275395, "456")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12378945601");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)