import { Cardapio } from "./Cardapio.js";
class Pedido{
    constructor(itens){
        this.itens = itens;
    }

    static verificaCarrinhoVazio(itens){
        for (const item of itens){
            if (item.trim().length === 0){
                return "Não há itens no carrinho de compra!";
            } 
        }
        if (itens.length === 0){
            return "Não há itens no carrinho de compra!";
        }
        return "Ok";   
    }
   
    static verificaExtraSemPrincipal(itens){
        const contemSanduiche = itens.some(item => item.includes('sanduiche'));
        const contemCafe = itens.some(item => item.includes('cafe'));
        for (const item of itens){
            const [nomeItem, qtde] = item.split(',');
            if ((itens.length === 1 && (nomeItem === 'chantily' || nomeItem === 'queijo')) 
            || (!contemCafe && nomeItem === 'chantily') 
            || (!contemSanduiche && nomeItem === 'queijo'))
            {
                return 'Item extra não pode ser pedido sem o principal';
            }
        }
        return 'Ok';
    }
   
    static verificaItemInvalido(itens){
        let menu = Cardapio.menu;
        for (let item of itens){
            if (item.indexOf(',') == -1){
                return "Item inválido!";
            } 
            let [nomeItem, qtde] = item.split(',');
            if (menu.every(menuItem => menuItem.codigo !== nomeItem) || (!nomeItem || !qtde)){
                return "Item inválido!";
            } 
        }
        return "Ok";
    }
    
    static verificaQtdeInvalida(itens){
        let menu = Cardapio.menu;
        for (const item of itens){
            const [nomeItem, qtde] = item.split(',');
            if (nomeItem && parseInt(qtde) <= 0){
                return "Quantidade inválida!";
            } else {
                return "Ok"
            }
        }
    }

    static calculaTotal(itens){
        let total = 0;
        for (const item of itens){
            const [nomeItem,qtde] = item.split(',');
            total += Cardapio.getValor(nomeItem) * parseInt(qtde);
        }
        return total;
    }
}
export {Pedido};