import { useEffect, useState } from "react";

import prettier from "prettier";
import parserBabel from "prettier/plugins/babel";
import * as prettierPluginEstree from "prettier/plugins/estree";

interface ExercicioProps {
  exercicio: {
    name: string;
    resposta: string;
  };
  onCodigoRenderizado: () => void;
}

function Exercicio({ exercicio, onCodigoRenderizado }: ExercicioProps) {
  const [mostrarCodigo, setMostrarCodigo] = useState(false);
  const [codigoFormatado, setCodigoFormatado] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codigoFormatado);
      console.log('Código copiado!');
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };  

  const handleClick = () => {
    setMostrarCodigo(!mostrarCodigo);
  };

  useEffect(() => {
    if (mostrarCodigo) {
      console.log("antigo", exercicio.resposta);
      // Formate o código quando ele for exibido
      prettier
        .format(exercicio.resposta, {
          parser: "babel",
          plugins: [parserBabel, prettierPluginEstree] as any,
        })
        .then((formattedCode) => {
          setCodigoFormatado(formattedCode);
          console.log("novo", formattedCode);
          setTimeout(() => {
            onCodigoRenderizado();
          }, 0);
        });
    } else {
      setCodigoFormatado("");
    }
  }, [mostrarCodigo, onCodigoRenderizado, exercicio.resposta]);

  const numeroExercicio = exercicio.name.match(/\d+/)?.[0];

  return (
    <div key={exercicio.name}>
      <button
        onClick={handleClick}
        className="m-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-500 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Exercício {numeroExercicio}
      </button>

      {mostrarCodigo && (
        <div className="relative">
            <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
          >
           {"Copiar"}
          </button>
        <pre>
          <code className="language-javascript">
            {codigoFormatado}
          </code>
        </pre>
        </div>
      )}
    </div>
  );
}

export default Exercicio;
