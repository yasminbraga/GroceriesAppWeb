"use client";
import { Dispatch, SetStateAction, useState } from "react";

type Data = {
  name: string;
  quantity: string;
};

type Props = {
  ingredientData: Data[];
  setIngredientData: Dispatch<SetStateAction<Data[]>>;
};

function IngredientInput({ ingredientData, setIngredientData }: Props) {
  const [inputValue, setInputValue] = useState<Data>({
    name: "",
    quantity: "",
  });

  // const [ingredientData, setIngredientData] = useState<Data[]>([]);

  const handleIngredientData = () => {
    if (inputValue.name && inputValue.quantity) {
      setIngredientData((prevItems) => [
        ...prevItems,
        { name: inputValue.name, quantity: inputValue.quantity },
      ]);
    }

    setInputValue({ name: "", quantity: "" });
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
            setInputValue({ ...inputValue, quantity: ev.target.value })
          }
          value={inputValue.quantity}
          className="border-1 border-gray-300 rounded-xl p-4 w-full"
        />
        <input
          type="text"
          placeholder="Ingrediente"
          value={inputValue.name}
          onChange={(ev) =>
            setInputValue({ ...inputValue, name: ev.target.value })
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
}

export default IngredientInput;
