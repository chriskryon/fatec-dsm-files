"use client"

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import Prism from 'prismjs';

import 'prismjs/components/prism-javascript';

// Importing a theme
import 'prismjs/themes/prism-tomorrow.css';


// import 'prismjs/themes/prism-tomorrow.css'; // Escolha um tema que você goste
// import 'prismjs/components/prism-javascript'; // Importe o suporte para JavaScript


// Componente Collapsible genérico (adapte à sua biblioteca de componentes)
interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

function Collapsible({ title, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Esconder' : 'Mostrar'} {title}
      </Button>
      {isOpen && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  );
}

// Dados mockados para dois exercícios
const exerciciosMock = [
  {
    nome: 'exercicio1',
    funcoes: 'let a = b + c',
  },
  {
    nome: 'exercicio2',
    funcoes: 'let a = b + c',
  },
];

export default function Respostas() {
    useEffect(() => {
        Prism.highlightAll();
      }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-4">
      {exerciciosMock.map((exercicio) => (
        <Collapsible key={exercicio.nome} title={exercicio.nome}>
            <div key={exercicio.nome}>
              <pre>
                <code className="language-javascript">{/* Adiciona a classe para destaque de sintaxe */}
                  {exercicio.funcoes}
                </code>
              </pre>
            </div>
        </Collapsible>
      ))}
    </div>
  );
}
