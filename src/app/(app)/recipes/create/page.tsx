"use client";
import Input from "@/app/components/ui/Input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import IngredientInput from "../../components/IngredientInput";
import InstructionInput from "./components/IntructionInput";

type Data = {
  name: string;
  quantity: string;
};

const NewRecipe: React.FC = () => {
  const [recipeTitle, setRecipeTitle] = useState<string | null>(null);
  const [ingredientData, setIngredientData] = useState<Data[]>([]);
  const [instructionList, setInstructionList] = useState<string[]>([]);
  const router = useRouter();

  const handleTitle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeTitle(ev.target.value);
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    try {
      const res = await fetch(`http://localhost:8080/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          key: "Access-Control-Allow-Credentials",
          value: "true",
        },
        body: JSON.stringify({
          title: recipeTitle,
          ingredients: ingredientData,
          instructions: instructionList,
        }),
      });

      if (!res.ok) throw new Error("Erro ao criar receita");

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl">
      <h3 className="font-bold text-3xl py-4">Nova Receita</h3>

      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Título da Receita"
          placeholder="Digite o título"
          handleValue={handleTitle}
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
