const fs = require('fs');
const path = require('path');

function extractFunctions(code) {
  const newCode = code.split(');\n\n');
  console.log(newCode.length)
  const functionRegex = /function\s+(\w+)\s*\(([^)]*)\)\s*{([\s\S]*?)}/g;

  const arrowFunctionRegex = /const\s+(\w+)\s*=\s*(?:\([^)]*\)\s*)?=>\s*\{([\s\S]*)\}/g;


  let functions = [];
  let match;

  // Encontra funções tradicionais
  while ((match = functionRegex.exec(code)) !== null) {

    const functionName = match[1];
    const functionBody = match[3].trim();
    functions.push({ titulo: functionName, corpo: functionBody });
  }

  while ((match = arrowFunctionRegex.exec(code)) !== null) {
    const functionName = match[1];
    const functionBody = match[3].trim();

    functions.push({ titulo: functionName, corpo: functionBody });
  }

  return functions;
}



const directoryPath = '/home/christopher/study/fatec-dsm-1-algoritmos/fatec-dsm-1-algoritmos/lib';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Erro ao ler o diretório:', err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file) === '.js') {
      const filePath = path.join(directoryPath, file);

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler o arquivo:', err);
          return;
        }

        const functions = extractFunctions(data);
        const tsObjectName = file.replace('.js', '');
        const capitalizedName = tsObjectName.charAt(0).toUpperCase() + tsObjectName.slice(1);

        const tsObject = { [capitalizedName]: functions };

        const tsFilePath = path.join(`${directoryPath}/generated`, file.replace('.js', '.ts'));
        const tsContent = `const activities = ${JSON.stringify(tsObject, null, 2)};\n\n export default activities;`;

        fs.writeFile(tsFilePath, tsContent, (err) => {
          if (err) {
            console.error('Erro ao escrever o arquivo TypeScript:', err);
          } else {
            console.log(`Arquivo TypeScript "${tsFilePath}" gerado com sucesso!`);
          }
        });
      });
    }
  });
});