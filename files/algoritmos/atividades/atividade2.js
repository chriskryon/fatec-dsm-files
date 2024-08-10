const exercicio1 = () => {
    for(let i = 0; i < 10; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

const exercicio2 = () => {
    for(let i = 10; i > 0; i--) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

const exercicio3 = () => {
    let placa = prompt("Entre com a placa: ");
    for(let i = 0; i < placa.length; i++) {
        console.log(placa[i]);
    }
}

const exercicio4 = () => {
    let placa = prompt("Entre com a placa: ");
    for(let i = 0; i < placa.length; i++) {
        let ascii = placa.charCodeAt(i);
        console.log(placa[i], ascii);
    }
}

const exercicio5 = () => {
    let placa = prompt("Entre com a placa: ");
    for(let i = 0; i < placa.length; i++) {
        let ascii = placa.charCodeAt(i);
        if (ascii >= 48 && ascii <= 57) {
            console.log(placa[i], ascii);
        }
    }
}

const exercicio6 = () => {
    let nros = ["19","11","5","10","20"]; 
    let soma = 0
    for(let i = 0; i < nros.length; i++) {
        soma += parseInt(nros[i]);
    }
    console.log("Somatório:", soma)
}

const exercicio7 = () => {
    let nros = "19,11,5,10,20";
    let arrayNros = nros.split(",");
    let soma = 0; 
    for(let i = 0; i < arrayNros.length; i++ ){ 
    soma += parseInt(arrayNros[i]); 
    } 
    console.log("Somatório:", soma);
}

const exercicio8 = () => {
    let nomes = ["Pedro","Lucy","Ana","Karla"]; 
    for(let i = 0; i < nomes.length; i++ ){ 
    console.log(nomes[i][0]); 
    }
}

const exercicio9 = () => {
    let nomes = ["Pedro","Lucy","Ana","Karla"]; 
    for(let i = 0; i < nomes.length; i++ ){ 
    console.log(nomes[i][nomes[i].length - 1]); 
    }
}

const exercicio10 = () => {
    let nomes = ["Pedro","Lucy","Ana","Karla"]; 
    for(let i = 0; i < nomes.length; i++ ){ 
        for(let j = 0; j < nomes[i].length; j++ ){ 
            console.log(nomes[i][j]); 
        } 
        console.log();
    }
}