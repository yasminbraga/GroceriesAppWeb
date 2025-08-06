"use client";
import { useState } from "react";

type Data = {
  name: string;
  quantity: string;
};

const IngredientInput: React.FC = () => {
  const [inputData, setInputData] = useState<Data>({
    name: "",
    quantity: "",
  });
  const [ingredientData, setIngredientData] = useState<Data[]>([]);

  const handleIngredientData = () => {
    if (inputData.name && inputData.quantity) {
      setIngredientData((prevItems) => [
        ...prevItems,
        { name: inputData.name, quantity: inputData.quantity },
      ]);
    }

    setInputData({ name: "", quantity: "" });
  };

  const handleDeleteIngredient = (index: number) => {
    setIngredientData((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEditIngredient = (index: number, value: Partial<Data>) => {
    const oldData = [...ingredientData];

    oldData[index] = { ...oldData[index], ...value };
    setIngredientData(oldData);
  };

  return (
    <section className="mb-4">
      <h4 className="font-medium mb-2">Ingredientes</h4>

      <div className="flex flex-col gap-4 mb-4">
        {ingredientData.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Quantidade"
              onChange={(ev) =>
                handleEditIngredient(index, { quantity: ev.target.value })
              }
              value={item.quantity}
              className="border-1 border-gray-300 rounded-xl p-4 w-full"
            />
            <input
              type="text"
              placeholder="Ingrediente"
              value={item.name}
              onChange={(ev) =>
                handleEditIngredient(index, { name: ev.target.value })
              }
              className="border-1 border-gray-300 rounded-xl p-4 w-full"
            />
            <button
              type="button"
              onClick={() => handleDeleteIngredient(index)}
              className="flex items-center justify-center p-4"
            >
              <span className="material-symbols-outlined !text-[20px] text-amber-500">
                delete
              </span>
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Quantidade"
          onChange={(ev) =>
            setInputData({ ...inputData, quantity: ev.target.value })
          }
          value={inputData.quantity}
          className="border-1 border-gray-300 rounded-xl p-4 w-full"
        />
        <input
          type="text"
          placeholder="Ingrediente"
          value={inputData.name}
          onChange={(ev) =>
            setInputData({ ...inputData, name: ev.target.value })
          }
          className="border-1 border-gray-300 rounded-xl p-4 w-full"
        />
        <button
          type="button"
          onClick={handleIngredientData}
          className="bg-amber-500 text-white flex items-center justify-center p-4 rounded-xl font-semibold"
        >
          <span className="material-symbols-outlined !text-[18px]">add</span>
        </button>
      </div>
    </section>
  );
};

export default IngredientInput;
