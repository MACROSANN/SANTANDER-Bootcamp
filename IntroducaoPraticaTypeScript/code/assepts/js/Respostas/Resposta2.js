"use strict";
// Como podemos melhorar o esse código usando TS? 
var trabalho;
(function (trabalho) {
    trabalho[trabalho["Atriz"] = 0] = "Atriz";
    trabalho[trabalho["Padeiro"] = 1] = "Padeiro";
})(trabalho || (trabalho = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: trabalho.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: trabalho.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: trabalho.Padeiro
};
