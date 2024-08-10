interface Exercicio {
  name: string;
  resposta: string;
}

const exercicios3: Exercicio[] = [
  {
    name: "exercicio1",
    resposta: `for (let i = 0; i < 10; i++) {
          if (i % 2 == 1) {
              console.log(i);
          }
      }
`,
  },
  {
    name: "exercicio2",
    resposta: `for (let i = 10; i > 0; i--) {
          if (i % 2 == 1) {
              console.log(i);
          }
      }
`,
  },
  {
    name: "exercicio3",
    resposta: `let placa = prompt("Entre com a placa: ");
      for (let i = 0; i < placa.length; i++) {
          console.log(placa[i]);
      }
`,
  },
  {
    name: "exercicio4",
    resposta: `let placa = prompt("Entre com a placa: ");
      for (let i = 0; i < placa.length; i++) {
          let ascii = placa.charCodeAt(i);
          console.log(placa[i], ascii);
      }
`,
  },
  {
    name: "exercicio5",
    resposta: `let placa = prompt("Entre com a placa: ");
      for (let i = 0; i < placa.length; i++) {
          let ascii = placa.charCodeAt(i);
          if (ascii >= 48 && ascii <= 57) {
              console.log(placa[i], ascii);
          }
      }
`,
  },
  {
    name: "exercicio6",
    resposta: `let nros = ["19", "11", "5", "10", "20"];
      let soma = 0;
      for (let i = 0; i < nros.length; i++) {
          soma += parseInt(nros[i]);
      }
      console.log("Somatório:", soma);
`,
  },
  {
    name: "exercicio7",
    resposta: `let nros = "19,11,5,10,20";
      let arrayNros = nros.split(",");
      let soma = 0;
      for (let i = 0; i < arrayNros.length; i++) {
          soma += parseInt(arrayNros[i]);
      }
      console.log("Somatório:", soma);
`,
  },
  {
    name: "exercicio8",
    resposta: `let nomes = ["Pedro", "Lucy", "Ana", "Karla"];
      for (let i = 0; i < nomes.length; i++) {
          console.log(nomes[i][0]);
      }
`,
  },
  {
    name: "exercicio9",
    resposta: `let nomes = ["Pedro", "Lucy", "Ana", "Karla"];
      for (let i = 0; i < nomes.length; i++) {
          console.log(nomes[i][nomes[i].length - 1]);
      }
`,
  },
  {
    name: "exercicio10",
    resposta: `let nomes = ["Pedro", "Lucy", "Ana", "Karla"];
      for (let i = 0; i < nomes.length; i++) {
          for (let j = 0; j < nomes[i].length; j++) {
              console.log(nomes[i][j]);
          }
          console.log();
      }
`,
  },
];

export default exercicios3;
