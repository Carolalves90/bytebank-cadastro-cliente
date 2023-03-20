export class ContaCorrente {
    agencia;
    cliente;

    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields  Proposta de campos Privados.
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("Erro ao tentar sacar")
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}