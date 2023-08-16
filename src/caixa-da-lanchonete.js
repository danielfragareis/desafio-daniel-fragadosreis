import { MetodoPgto } from "./MetodoPgto.js";
import { Pedido } from "./Pedido.js";

class CaixaDaLanchonete{
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        try{
            let total = 0;
            const CARRINHO_VAZIO_ERRO = Pedido.verificaCarrinhoVazio(itens);
            const ITEM_INVALIDO_ERRO = Pedido.verificaItemInvalido(itens);
            const QTDE_INVALIDA_ERRO = Pedido.verificaQtdeInvalida(itens);
            const EXTRA_SEM_PRINCIPAL_ERRO = Pedido.verificaExtraSemPrincipal(itens);
            const METODO_PGTO_ERRO = MetodoPgto.verificaMetodoPgto(metodoDePagamento);

            if (CARRINHO_VAZIO_ERRO !== 'Ok') {
                return CARRINHO_VAZIO_ERRO;
            } else if (ITEM_INVALIDO_ERRO !== 'Ok') {
                return ITEM_INVALIDO_ERRO;
            } else if (QTDE_INVALIDA_ERRO !== 'Ok') {
                return QTDE_INVALIDA_ERRO;
            } else if (EXTRA_SEM_PRINCIPAL_ERRO !== 'Ok') {
                return EXTRA_SEM_PRINCIPAL_ERRO;
            } else if (METODO_PGTO_ERRO !== metodoDePagamento) {
                return METODO_PGTO_ERRO;
            } else {
                total = MetodoPgto.calculaValorTotal(Pedido.calculaTotal(itens), metodoDePagamento);
                return `R$ ${total.toFixed(2).replace(/\./g, ',')}`;
            }

        }catch (error){
            console.error("Ocorreu um erro:", error);
        }
    }
}

export { CaixaDaLanchonete };