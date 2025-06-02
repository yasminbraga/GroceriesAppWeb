"use client";

import { useEffect, useState } from "react";

type Data = {
  productName: string;
  quantity: string;
};

const NewList: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [listName, setListName] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>("");
  const [inputData, setInputData] = useState<Data>({
    productName: "",
    quantity: "",
  });
  const [productData, setProductData] = useState<Data[]>([]);
  const isInputDisabled = selectedRecipeId !== "";
  const isSelectedDisabled =
    inputData.productName !== "" || inputData.quantity !== "";

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
    if (inputData.productName && inputData.quantity) {
      setProductData((prevItems) => [
        ...prevItems,
        { productName: inputData.productName, quantity: inputData.quantity },
      ]);
    }

    setInputData({ productName: "", quantity: "" });
  };

  const handleEditProduct = (index: number, value: Partial<Data>) => {
    const oldData = [...productData];

    oldData[index] = { ...oldData[index], ...value };
    setProductData(oldData);
  };

  const handleDeleteProduct = (index: number) => {
    setProductData((prev) => prev.filter((_, i) => i !== index));
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
      <h3 className="font-semibold text-lg mb-2">Nova Lista</h3>
      <form
        className="flex flex-col bg-white rounded p-6 w-[600px] shadow-sm"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-1 my-2">
          <span className="text-sm">Título da lista</span>
          <input
            type="text"
            placeholder="Título da lista"
            onChange={(ev) => setListName(ev.target.value)}
            className="border-1 rounded border-gray-300 p-1"
          />
        </label>

        <label htmlFor="" className="flex flex-col gap-1 my-2">
          <span className="text-sm">Anexe uma receita</span>
          <select
            name="recipeId"
            value={selectedRecipeId ?? ""}
            onChange={(ev) => handleSelect(ev)}
            disabled={isSelectedDisabled}
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
          <span className="text-sm mb-1">Produtos</span>

          <div className="flex flex-col gap-2 mb-2">
            {productData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder="Quantidade"
                  className="border-1 rounded border-gray-300 p-1 w-full"
                  value={item.quantity}
                  onChange={(ev) =>
                    handleEditProduct(index, { quantity: ev.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Produto"
                  className="border-1 rounded border-gray-300 p-1 w-full"
                  value={item.productName}
                  onChange={(ev) =>
                    handleEditProduct(index, { productName: ev.target.value })
                  }
                />

                <button
                  type="button"
                  onClick={() => handleDeleteProduct(index)}
                  className="flex items-center justify-center p-2 rounded"
                >
                  <span className="material-symbols-outlined !text-[18px] text-amber-500">
                    delete
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              disabled={isInputDisabled}
              placeholder="Quantidade"
              className="border-1 rounded border-gray-300 p-1 w-full"
              value={inputData.quantity}
              onChange={(ev) =>
                setInputData({ ...inputData, quantity: ev.target.value })
              }
            />
            <input
              type="text"
              placeholder="Produto"
              className="border-1 rounded border-gray-300 p-1 w-full"
              value={inputData.productName}
              onChange={(ev) =>
                setInputData({ ...inputData, productName: ev.target.value })
              }
            />
            <button
              type="button"
              onClick={handleProductData}
              className="bg-amber-500 text-white flex items-center justify-center p-2 rounded"
            >
              <span className="material-symbols-outlined !text-[18px]">
                add
              </span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-amber-500 text-white font-semibold text-sm flex items-center justify-center p-2 rounded w-fit self-end mt-4 cursor-pointer"
        >
          Criar Lista
        </button>
      </form>
    </div>
  );
};

export default NewList;
