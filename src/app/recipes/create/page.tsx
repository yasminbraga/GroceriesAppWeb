"use client";
import Input from "@/app/components/ui/Input";
import { useState } from "react";
import InstructionInput from "./components/IntructionInput";

const NewRecipe: React.FC = () => {
  const [recipeTitle, setRecipeTitle] = useState<string | null>(null);

  const handleTitle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeTitle(ev.target.value);
  };

  return (
    <div className="max-w-2xl">
      <h3 className="font-bold text-3xl py-4">Nova Receita</h3>

      <form action="">
        <Input
          label="Título da Receita"
          placeholder="Digite o título"
          onChange={handleTitle}
        />

        <section className="mb-4">
          <h4 className="font-medium mb-2">Ingredientes</h4>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Quantidade"
              className="border-1 border-gray-300 rounded-xl p-4 w-full"
            />
            <input
              type="text"
              placeholder="Ingrediente"
              className="border-1 border-gray-300 rounded-xl p-4 w-full"
            />
            <button
              type="button"
              className="bg-amber-500 text-white flex items-center justify-center p-4 rounded-xl font-semibold"
            >
              <span className="material-symbols-outlined !text-[18px]">
                add
              </span>
            </button>
          </div>
        </section>

        <InstructionInput />
        <button className="bg-amber-500 text-white flex items-center justify-center p-4 rounded-xl justify-self-end font-semibold mt-4">
          Criar receita
        </button>
      </form>
    </div>
  );
};

export default NewRecipe;
