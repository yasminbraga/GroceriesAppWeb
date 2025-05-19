"use client";

import { useEffect, useState } from "react";

const NewList: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [listName, setListName] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<string | null>(null);
  const [product, setProduct] = useState<string | null>(null);
  const [productData, setProductData] = useState<
    Array<{
      name: string;
      quantity: string;
    }>
  >([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      const data = await fetch("http://localhost:8080/recipes");
      const dataRecipes = await data.json();
      setRecipes(dataRecipes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRecipeId(ev.target.value);
  };

  const handleProductData = () => {
    setProductData((prevItems) => [
      ...prevItems,
      { name: product ?? "", quantity: quantity ?? "" },
    ]);
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    try {
      const res = await fetch(`http://localhost:8080/lists`, {
        method: "POST",
        headers: {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Nova Lista</h3>
      <form
        action=""
        className="flex flex-col bg-white rounded p-6"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          Título da lista
          <input
            type="text"
            placeholder="Título da lista"
            onChange={(ev) => setListName(ev.target.value)}
            className="border-1 rounded border-gray-300 p-1"
          />
        </label>

        <label htmlFor="" className="flex flex-col">
          Anexe uma receita
          <select
            name="recipeId"
            id=""
            onChange={(ev) => handleSelect(ev)}
            className="border-1 rounded border-gray-300 p-1"
          >
            <option value="">Selecione uma receita</option>
            {recipes.map((recipe) => (
              <option value={recipe.id} key={recipe.id}>
                {recipe.title}
              </option>
            ))}
          </select>
        </label>

        <div>
          <p>Produtos</p>

          <div>
            <input
              type="text"
              placeholder="Quantidade"
              onChange={(ev) => setQuantity(ev.target.value)}
            />
            <input
              type="text"
              placeholder="Produto"
              onChange={(ev) => setProduct(ev.target.value)}
            />
            <button type="button" onClick={handleProductData}>
              <span className="material-symbols-outlined !text-[18px]">
                add
              </span>
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col">
          <div className="flex gap-2">
            {productData.map((item) => (
              <div key={item.name} className="flex gap-2">
                <p>{item.quantity}</p>
                <p>{item.name}</p>
              </div>
            ))}
            
          </div>
        </div> */}

        <button type="submit">Criar Lista</button>
      </form>
    </div>
  );
};

export default NewList;
