class MetodoPgto{
    constructor(formaPgto){
        this.formaPgto = formaPgto;
    }

    static tipoPgto = [
        'debito',
        'credito',
        'dinheiro'
    ]

    static TAXA_DESCONTO_DINHEIRO = 0.05;
    static TAXA_ACRESCIMO_CREDITO = 0.03;

    static verificaMetodoPgto(formaPgto) {
        if (this.tipoPgto.includes(formaPgto)) {
            return formaPgto;
        } else {
            return 'Forma de pagamento inválida!';
        }
    }
   
    static calculaValorTotal(valor, formaPgto) {
        switch (formaPgto) {
            case 'dinheiro':
                return valor * (1 - this.TAXA_DESCONTO_DINHEIRO);
            case 'credito':
                return valor * (1 + this.TAXA_ACRESCIMO_CREDITO);
            default:
                return valor;
        }
    }
}
export {MetodoPgto};
    