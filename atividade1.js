

const exercicio1 = () => {
    let entrada = "15"
    entrada = parseInt(entrada)
    let soma = entrada + entrada;
    console.log(soma)
}


const exercicio2 = () => {
    let entrada = prompt("Entre com a idade: ");
    entrada = parseInt(entrada);
    if (entrada < 18) {
        console.log("De menor");
    } else {
        console.log("De maior");
    }
}

const exercicio3 = () => {
    let i = 0;
    while (i < 6) {
        nro = Math.random();
        console.log(nro);
        i = i + 1;
    }
}

const exercicio4 = () => {
    let i = 0;
    while (i < 6) {
        nro = Math.floor(Math.random() * 100);
        if (nro % 2 == 0) {
            console.log(nro);
        }
        i = i + 1;
    }
}

const exercicio5 = () => {
    let i = 0;
    while (i < 6) {
        nro = Math.floor(Math.random() * 100);
        if (nro % 2 == 0) {
            console.log(nro);
        }
        i = i + 1;
    }
}

const exercicio6 = () => {
    let i = 0;
    while (i < 6) {
        nro = Math.floor(Math.random() * 100);
        if (nro % 2 == 0) {
            console.log(nro);
            i = i + 1;
        }
    }
}

const exercicio7 = () => {
    let i = 0;
    while (i < 6) {
        nro = Math.floor(Math.random() * 100);
        if (nro % 3 == 0 || nro % 5 == 0) {
            console.log(nro);
            i = i + 1;
        }
    }
}

const exercicio8 = () => {
    let i = 0;
    while (i < 6) {
        nro = Math.floor(Math.random() * 100);
        if ((nro % 3 == 0 || nro % 5 == 0) && nro < 20) {
            console.log(nro);
            i = i + 1;
        }
    }
}

const exercicio9 = () => {
    let i = 0;
    while (i < 6) {
        nro = Math.floor(Math.random() * 100);
        if (nro < 20 || nro > 80) {
            console.log(nro);
            i = i + 1;
        }
    }
}

const exercicio10 = () => {
    let i = 0;
    while (i < 6) {
        nro = Math.floor(Math.random() * 100);
        if (nro < 50 && nro % 2 == 1) {
            console.log(nro, "impar < 50");
            i = i + 1;
        } else if (nro % 2 == 0 && nro >= 50) {
            console.log(nro, "par >= 50");
            i = i + 1;
        }
    }
}

const toRun = () => {
    exercicio1();
    exercicio2();
    exercicio3();
    exercicio4();
    exercicio5();
    exercicio6();
    exercicio7();
    exercicio8();
    exercicio9();
    exercicio10();
};

// Execute all exercises
toRun();