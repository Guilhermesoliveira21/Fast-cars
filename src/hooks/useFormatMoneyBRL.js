export const useFormatMoneyBRL = (value) => {

    return value.toLocateString('pt-BR', {style: 'currency', currency: 'BRL'});

}