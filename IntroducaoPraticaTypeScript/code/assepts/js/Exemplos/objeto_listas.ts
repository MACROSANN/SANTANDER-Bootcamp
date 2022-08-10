const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissão: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: { nome: string, idade: number, profissao: string } = {
    nome: 'Andre',
    idade: 30,
    profissao: 'pintor'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const Jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Atriz,
    materias: ['Matemática discreta', 'programação']
}

const Monica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(Monica.materias);