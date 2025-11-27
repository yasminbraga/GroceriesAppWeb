"use client";

import IngredientInput from "@/app/components/IngredientInput";
import Input from "@/app/components/ui/Input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Data = {
  name: string;
  quantity: string;
};

const NewList: React.FC = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [listName, setListName] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>("");
  const [productData, setProductData] = useState<Data[]>([]);
  const isInputDisabled = selectedRecipeId !== "";
  const isSelectedDisabled = productData.length !== 0;
  const [cookie, setCookie] = useState("");

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];

    setCookie(cookieValue ?? "");

    loadRecipes(cookieValue ?? "");
  }, []);

  const loadRecipes = async (token: string) => {
    try {
      const data = await fetch("http://localhost:8080/recipes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        cache: "no-store",
      });
      const dataRecipes = await data.json();
      setRecipes(dataRecipes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setListName(ev.target.value);
  };

  const handleSelect = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRecipeId(ev.target.value);
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    try {
      const res = await fetch(`http://localhost:8080/lists`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookie}`,
          "Content-Type": "application/json",
          key: "Access-Control-Allow-Credentials",
          value: "true",
        },
        body: JSON.stringify({
          title: listName,
          recipeId: selectedRecipeId,
          products: productData,
        }),
      });

      if (!res.ok) throw new Error("Erro ao criar lista");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl">
      <h3 className="font-bold text-3xl py-4">Nova Lista</h3>

      <form onSubmit={handleSubmit}>
        <Input
          label="Título da lista"
          placeholder="Título da lista"
          handleValue={handleTitle}
        />

        <label className="flex flex-col gap-1 mb-4">
          <span className="font-medium mb-2">Anexe uma receita</span>
          <select
            name="recipeId"
            value={selectedRecipeId ?? ""}
            onChange={(ev) => handleSelect(ev)}
            disabled={isSelectedDisabled}
            className={
              "border-1 border-gray-300 rounded-xl p-4 disabled:bg-gray-300"
            }
          >
            <option value="">Selecione uma receita</option>
            {recipes.map((recipe) => (
              <option value={recipe.id} key={recipe.id}>
                {recipe.title}
              </option>
            ))}
          </select>
        </label>

        <IngredientInput
          ingredientData={productData}
          setIngredientData={setProductData}
          isInputDisabled={isInputDisabled}
        />

        <button className="bg-amber-500 text-white flex items-center justify-center p-4 rounded-xl justify-self-end font-semibold mt-4">
          Criar lista
        </button>
      </form>
    </div>
  );
};

export default NewList;
