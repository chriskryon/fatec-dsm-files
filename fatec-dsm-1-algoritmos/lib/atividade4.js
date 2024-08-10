const exercicio1 = (nome) => {
    return nome.split("")
}

const exercicio2 = (nome) => {
    const v = nome.split("")
    for (let i = 0; i < v.length; i++) {
        if (v[i] == "a") {
            v[i] = "-"
        }
    }
    return v
}

const exercicio3 = (nome) => {
    const v = nome.split("")
    const vogais = new Set(["a", "e", "i", "o", "u"]);
    for (let i = 0; i < v.length; i++) {
        if (vogais.has(v[i])) {
            v[i] = "-"
        }
    }
    return v
}

const exercicio4 = (nome) => {
    const v = nome.split("")
    for (let i = 0; i < v.length; i++) {
        v[i] = `<div>${v[i]}</div>`
    }
    return v
}

const exercicio5 = (a, b) => {
    let v = []; // cria um array vazio 
    for (let i = 0; a <= b; i++, a++) { 
        v[i] = a;
    } 
    return v; 
}

const exercicio6 = (a, b) => {
    let v = []; // cria um array vazio 
    for (let i = 0; a <= b; i++, a++) { 
        v[i] = a + '';
    } 
    return v; 
}

const exercicio7 = (a, b) => {
    let v = [];
    for (let i = 0; i < a.length; i++) { 
        v[i] = a[i] + b[i];
    } 
    return v; 
}

const exercicio8 = (a, b) => {
    let v = [];
    for (let i = 0; i < a.length; i++) { 
        if (a[i] >= b[i]) {
            v[i] = a[i];
        } else {
            v[i] = b[i];
        }
    } 
    return v; 
}

const exercicio9 = (a, b) => {
    let v = [];
    return [a, b]
}

const exercicio10 = (m) => {
    let soma = 0; 
    for (let i = 0; i < m.length; i++ ){ 
        for (let j = 0; j < m[i].length; j++){ 
            soma += m[i][j];
        } 
    } 
    return soma;
}