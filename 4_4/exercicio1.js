let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};
let info2 = {
    personagem: "Tio patinhas",
    origem: "Christimas on bear Montain, Dell's four color comics #178",
    nota: "O ultimo MacPatinhas",
    recorrente: "Sim"
};
console.log("Bem-vinda, " + info.personagem);

console.log(info);

for (let chave in info) {
    console.log(chave);
}
for (const key in info) {
    console.log(info[key]);
}
let recorrente;
let ambos;

console.log("exercicio 5")
for (var chave in info2) {
    if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
        recorrente = info.recorrente;
        delete info2.recorrente;
        delete info.recorrente;
        ambos = 'ambos recorrentes'; 

    }
    console.log(info[chave] + ' e ' + info2[chave]);

}
    info.recorrente = recorrente;
    info2.recorrente = recorrente;
console.log(ambos);