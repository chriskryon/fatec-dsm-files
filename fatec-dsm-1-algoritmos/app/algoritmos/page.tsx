"use client";

import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript"; // Language
import "prismjs/components/prism-javascript";
import { useEffect } from "react";
import exercicio1 from "@/lib/algoritmos/converted/ex1";
import exercicio2 from "@/lib/algoritmos/converted/ex2";
import exercicio3 from "@/lib/algoritmos/converted/ex3";
import exercicio4 from "@/lib/algoritmos/converted/ex4";
import "./prism.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Exercicio from "@/components/ui/algoritmos/exercicio";

type Lista = {
  name: string;
  value: any;
};

let lista = 1;
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
      <Accordion collapsible className="w-full" type="single">
          {listas.map((listaItem, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="px-3">{listaItem.name}</AccordionTrigger>
              <AccordionContent className="max-h-[300px] overflow-y-auto">
                {listaItem.value.map((exercicio: any, exercicioIndex: any) => (
                    <Exercicio
                      key={Math.random() * exercicioIndex}
                      exercicio={exercicio}
                      onCodigoRenderizado={handleCodigoRenderizado}
                    />
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