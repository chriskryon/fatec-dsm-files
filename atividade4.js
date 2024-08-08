const exercicio1 = (nome) => {
    return nome.split("")
}
console.log(exercicio1("Pedro"))

const exercicio2 = (nome) => {
    const v = nome.split("")
    for (let i = 0; i < v.length; i++) {
        if (v[i] == "a") {
            v[i] = "-"
        }
    }
    return v
}
console.log(exercicio2("Mariana"))

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
console.log(exercicio3("Mariana"))

const exercicio4 = (nome) => {
    const v = nome.split("")
    for (let i = 0; i < v.length; i++) {
        v[i] = `<div>${v[i]}</div>`
    }
    return v
}
console.log(exercicio4("Mariana"))

const exercicio5 = (a, b) => {
    let v = []; // cria um array vazio 
    for (let i = 0; a <= b; i++, a++) { 
        v[i] = a;
    } 
    return v; 
}
let r = exercicio5(5,10); 
console.log("Array:", r);

const exercicio6 = (a, b) => {
    let v = []; // cria um array vazio 
    for (let i = 0; a <= b; i++, a++) { 
        v[i] = a + '';
    } 
    return v; 
}
r = exercicio6(5,10); 
console.log("Array:", r);

const exercicio7 = (a, b) => {
    let v = [];
    for (let i = 0; i < a.length; i++) { 
        v[i] = a[i] + b[i];
    } 
    return v; 
}
let a = [5,8,3,4,9,7]; 
let b = [3,5,9,2,3,4]; 
r = exercicio7(a,b); 
console.log("Soma:", r);

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
r = exercicio8(a,b); 
console.log("Maior:", r);

const exercicio9 = (a, b) => {
    let v = [];
    return [a, b]
}
r = exercicio9(a,b); 
console.log("Juntar:", r);

const exercicio10 = (m) => {
    let soma = 0; 
    for (let i = 0; i < m.length; i++ ){ 
        for (let j = 0; j < m[i].length; j++){ 
            soma += m[i][j];
        } 
    } 
    return soma;
}
let m = [ 
    [5,8,3,4,9,7], 
    [3,5,9,2,3,4] 
  ]; 
r = exercicio10(m); 
console.log("Somatório:", r);