class Cardapio {
    constructor(codigo, valor) {
        this.codigo = codigo;
        this.valor = valor;
    }
    
    static menu = [
        new Cardapio('cafe', 3.0),
        new Cardapio('chantily', 1.5),
        new Cardapio('suco', 6.2),
        new Cardapio('sanduiche', 6.50),
        new Cardapio('queijo', 2.00),
        new Cardapio('salgado', 7.25),
        new Cardapio('combo1', 9.50),
        new Cardapio('combo2', 7.50)
    ]
    
    static getValor(nomeItem) {
        const item = this.menu.find(menuItem => menuItem.codigo === nomeItem);
        return item.valor;
    }
}

export { Cardapio};
