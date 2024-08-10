interface Exercicio {
  name: string;
  resposta: string;
}

const exercicios1: Exercicio[] = [
  {
    name: "exercicio1",
    resposta: `let entrada = "15";
      entrada = parseInt(entrada);
      let soma = entrada + entrada;
      console.log(soma);
`,
  },
  {
    name: "exercicio2",
    resposta: `let entrada = prompt("Entre com a idade: ");
      entrada = parseInt(entrada);
      if (entrada < 18) {
          console.log("De menor");
      } else {
          console.log("De maior");
      }
`,
  },
  {
    name: "exercicio3",
    resposta: `let i = 0;
      while (i < 6) {
          let nro = Math.random();
          console.log(nro);
          i = i + 1;
      }
`,
  },
  {
    name: "exercicio4",
    resposta: `let i = 0;
      while (i < 6) {
          let nro = Math.floor(Math.random() * 100);
          if (nro % 2 == 0) {
              console.log(nro);
          }
          i = i + 1;
      }
`,
  },
  {
    name: "exercicio5",
    resposta: `let i = 0;
      while (i < 6) {
          let nro = Math.floor(Math.random() * 100);
          if (nro % 2 == 0) {
              console.log(nro);
          }
          i = i + 1;
      }
`,
  },
  {
    name: "exercicio6",
    resposta: `let i = 0;
      while (i < 6) {
          let nro = Math.floor(Math.random() * 100);
          if (nro % 2 == 0) {
              console.log(nro);
              i = i + 1;
          }
      }
`,
  },
  {
    name: "exercicio7",
    resposta: `let i = 0;
      while (i < 6) {
          let nro = Math.floor(Math.random() * 100);
          if (nro % 3 == 0 || nro % 5 == 0) {
              console.log(nro);
              i = i + 1;
          }
      }
`,
  },
  {
    name: "exercicio8",
    resposta: `let i = 0;
      while (i < 6) {
          let nro = Math.floor(Math.random() * 100);
          if ((nro % 3 == 0 || nro % 5 == 0) && nro < 20) {
              console.log(nro);
              i = i + 1;
          }
      }
`,
  },
  {
    name: "exercicio9",
    resposta: `let i = 0;
      while (i < 6) {
          let nro = Math.floor(Math.random() * 100);
          if (nro < 20 || nro > 80) {
              console.log(nro);
              i = i + 1;
          }
      }
`,
  },
  {
    name: "exercicio10",
    resposta: `let i = 0;
      while (i < 6) {
          let nro = Math.floor(Math.random() * 100);
          if (nro < 50 && nro % 2 == 1) {
              console.log(nro, "impar < 50");
              i = i + 1;
          } else if (nro % 2 == 0 && nro >= 50) {
              console.log(nro, "par >= 50");
              i = i + 1;
          }
      }
`,
  },
];

export default exercicios1;
