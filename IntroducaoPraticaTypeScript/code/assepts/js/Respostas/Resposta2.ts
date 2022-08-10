// Como podemos melhorar o esse código usando TS? 

enum trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: trabalho
}

let pessoa1: Humano = {
    nome: "maria",
    idade: 29,
    profissao: trabalho.Atriz
}

let pessoa2: Humano = {
    nome: "roberto",
    idade: 19,
    profissao: trabalho.Padeiro
}

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: trabalho.Padeiro
}