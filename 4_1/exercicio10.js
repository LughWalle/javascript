let custoProduto = 1;
let valorDeVenda = 4;
if (custoProduto >= 0 && valorDeVenda >= 0) {
    let lucro = (valorDeVenda - (custoProduto * 1.2)) * 1000;
    console.log("lucro " + lucro);
} else {
    console.log("erro, valor menor que zero")
}
