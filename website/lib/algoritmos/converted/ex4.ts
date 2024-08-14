
interface Exercicio {
  name: string;
  resposta: string;
}

const exercicio4: Exercicio[] = [
  {
    name: "exercicio1",
    resposta: `const exercicio1 = (nome) => {
    return nome.split("");
};`,
  },
  {
    name: "exercicio2",
    resposta: `const exercicio2 = (nome) => {
    const v = nome.split("");
    for (let i = 0; i < v.length; i++) {
        if (v[i] == "a") {
            v[i] = "-";
        }
    }
    return v;
};`,
  },
  {
    name: "exercicio3",
    resposta: `const exercicio3 = (nome) => {
    const v = nome.split("");
    const vogais = new Set(["a", "e", "i", "o", "u"]);
    for (let i = 0; i < v.length; i++) {
        if (vogais.has(v[i])) {
            v[i] = "-";
        }
    }
    return v;
};`,
  },
  {
    name: "exercicio4",
    resposta: `const exercicio4 = (nome) => {
    const v = nome.split("");
    for (let i = 0; i < v.length; i++) {
        v[i] = \`<div>\${v[i]}</div>\`;
    }
    return v;
};`,
  },
  {
    name: "exercicio5",
    resposta: `const exercicio5 = (a, b) => {
    let v = []; // cria um array vazio 
    for (let i = 0; a <= b; i++, a++) { 
        v[i] = a;
    } 
    return v; 
};`,
  },
  {
    name: "exercicio6",
    resposta: `const exercicio6 = (a, b) => {
    let v = []; // cria um array vazio 
    for (let i = 0; a <= b; i++, a++) { 
        v[i] = a + '';
    } 
    return v; 
};`,
  },
  {
    name: "exercicio7",
    resposta: `const exercicio7 = (a, b) => {
    let v = [];
    for (let i = 0; i < a.length; i++) { 
        v[i] = a[i] + b[i];
    } 
    return v; 
};`,
  },
  {
    name: "exercicio8",
    resposta: `const exercicio8 = (a, b) => {
    let v = [];
    for (let i = 0; i < a.length; i++) { 
        if (a[i] >= b[i]) {
            v[i] = a[i];
        } else {
            v[i] = b[i];
        }
    } 
    return v; 
};`,
  },
  {
    name: "exercicio9",
    resposta: `const exercicio9 = (a, b) => {
    let v = [];
    return [a, b];
};`,
  },
  {
    name: "exercicio10",
    resposta: `const exercicio10 = (m) => {
    let soma = 0; 
    for (let i = 0; i < m.length; i++ ){ 
        for (let j = 0; j < m[i].length; j++){ 
            soma += m[i][j];
        } 
    } 
    return soma;
};`,
  },
];

export default exercicio4;