"use client";

import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript"; // Language
import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
import exercicio1 from "@/lib/converted/ex1";
import exercicio2 from "@/lib/converted/ex2";
import exercicio3 from "@/lib/converted/ex3";
import exercicio4 from "@/lib/converted/ex4";
import "./prism.css";
// import prettier from "prettier";
// const parserBabel = dynamic(() => import("prettier/plugins/babel") as any, {
//   ssr: false, // Não renderizar no servidor
// });
// const prettierPluginEstree = dynamic(() => import("prettier/plugins/estree") as any, {
//   ssr: false, 
// });

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Exercicio from "@/components/ui/exercicio";


// const testando = [...exercicio1, ...exercicio2, ...exercicio3, ...exercicio4];
let lista = 1;
const testando = [...exercicio1];

type Lista = {
  name: string;
  value: any;
};

const listas: Lista[] = [
  {
    name: `Exercício ${lista++}`,
    value: exercicio1,
  },
  {
    name: `Exercício ${lista++}`,
    value: exercicio2,
  },
  {
    name: `Exercício ${lista++}`,
    value: exercicio3,
  },
  {
    name: `Exercício ${lista++}`,
    value: exercicio4,
  },
];

function Code() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCodigoRenderizado = () => {
    Prism.highlightAll();
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto max-w-7xl p-4"> {/* Adiciona overflow-y-auto e max-h */}
      <h1 className="text-center mb-3 text-xl">Listas de Exercícios</h1>
      <h1 className="text-center mb-3 text-base">Algoritmos e Lógica de Programação</h1>
      <div className="bg-gray-800 bg-opacity-20 border rounded-md">
      <Accordion collapsible className="w-full">
          {listas.map((listaItem, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{listaItem.name}</AccordionTrigger>
              <AccordionContent className="max-h-[300px] overflow-y-auto">
                {listaItem.value.map((exercicio: any, exercicioIndex: any) => (
                  <Accordion type="single" collapsible>
                    <Exercicio
                      key={Math.random() * exercicioIndex}
                      exercicio={exercicio}
                      onCodigoRenderizado={handleCodigoRenderizado}
                    />
                  </Accordion>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
        
      </div>
    </div>
    </>
  );
}

export default Code;