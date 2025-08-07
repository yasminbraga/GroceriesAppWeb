"use client";
import Input from "@/app/components/ui/Input";
import { useState } from "react";
import IngredientInput from "./components/IngredientInput";
import InstructionInput from "./components/IntructionInput";

type Data = {
  name: string;
  quantity: string;
};

const NewRecipe: React.FC = () => {
  const [recipeTitle, setRecipeTitle] = useState<string | null>(null);
  const [ingredientData, setIngredientData] = useState<Data[]>([]);
  const [instructionList, setInstructionList] = useState<string[]>([]);

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

        <IngredientInput
          ingredientData={ingredientData}
          setIngredientData={setIngredientData}
        />

        <InstructionInput
          instructionList={instructionList}
          setInstructionList={setInstructionList}
        />
        <button className="bg-amber-500 text-white flex items-center justify-center p-4 rounded-xl justify-self-end font-semibold mt-4">
          Criar receita
        </button>
      </form>
    </div>
  );
};

export default NewRecipe;
