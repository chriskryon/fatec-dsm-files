interface Exercicio {
  name: string;
  resposta: string;
}

const exercicio3: Exercicio[] = [
  {
    name: "exercicio1",
    resposta: `const exercicio1 = (a, b) => {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
};`,
  },
  {
    name: "exercicio2",
    resposta: `const exercicio2 = (a, b) => {
    for (; a <= b; a++) {
        console.log(a);
    }
};`,
  },
  {
    name: "exercicio3",
    resposta: `const exercicio3 = (a, b) => {
    console.log("Exercício 3");
    if (b < a) {
        let temp = a;
        a = b;
        b = temp;
    }
    for (; a <= b; a++) {
        console.log(a);
    }
};`,
  },
  {
    name: "exercicio4",
    resposta: `const exercicio4 = (a, b, tipo) => {
    if (tipo == "+") {
        return a + b;
    } else if (tipo == "-") {
        return a - b;
    } else if (tipo == "*") {
        return a * b;
    } else if (tipo == "/") {
        return a / b;
    }
};`,
  },
  {
    name: "exercicio5",
    resposta: `const exercicio5 = (a, b, tipo) => {
    let r = NaN;
    if (tipo == "+") {
        r = a + b;
    } else if (tipo == "-") {
        r = a - b;
    } else if (tipo == "*") {
        r = a * b;
    } else if (tipo == "/") {
        r = a / b;
    } else if (tipo == "**") {
        r = a ** b;
    }
    return r;
};`,
  },
  {
    name: "exercicio6",
    resposta: `const exercicio6 = (a, b, c) => {
    return \`\${a} \${b} \${c}\`;
};`,
  },
  {
    name: "exercicio7",
    resposta: `const exercicio7 = (a, b) => {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
};`,
  },
  {
    name: "exercicio8",
    resposta: `const exercicio8 = (nro) => {
    let soma = 0;
    for (let i = 0; i <= nro; i++) {
        soma += i;
    }
    return soma;
};`,
  },
  {
    name: "exercicio9",
    resposta: `const exercicio9 = (nro) => {
    let total = 1;
    for (let i = 1; i <= nro; i++) {
        total = total * i;
    }
    return total;
};`,
  },
  {
    name: "exercicio10",
    resposta: `const exercicio10 = (nro) => {
    if (nro < 0) {
        return NaN;
    }
    let total = 1;
    for (let i = 1; i <= nro; i++) {
        total = total * i;
    }
    return total;
};`,
  },
];

export default exercicio3;