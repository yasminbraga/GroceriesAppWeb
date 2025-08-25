"use client";

import Link from "next/link";
import { useState } from "react";

const RecipeDropdown = ({ recipes }: { recipes: RecipeType[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className="flex gap-2 items-center justify-between p-2 border-1 border-gray-300 rounded-md"
        onClick={handleToggle}
      >
        <span>Receitas</span>
        {isOpen ? (
          <span className="material-symbols-outlined">keyboard_arrow_up</span>
        ) : (
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        )}
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-10 bg-white shadow-lg p-4 rounded-lg min-w-[300px]">
          {recipes.map((item) => (
            <Link
              key={item.id}
              href={`http://localhost:3000/recipes/${item.id}`}
              className="flex justify-between items-center"
            >
              <div className="flex gap-2 flex-col mr-6">
                <p>{item.title}</p>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeDropdown;
