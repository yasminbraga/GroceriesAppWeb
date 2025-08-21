"use client";

import Link from "next/link";
import { useState } from "react";
import Badge from "../Badge";

const Dropdown = ({ lists }: { lists: ListType[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className="flex gap-2 items-center justify-between p-4 border-1 border-gray-300 rounded-xl"
        onClick={handleToggle}
      >
        <span>Listas</span>
        {isOpen ? (
          <span className="material-symbols-outlined">keyboard_arrow_up</span>
        ) : (
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        )}
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-10 bg-white shadow-lg p-4 rounded-lg min-w-[300px]">
          {lists.map((list) => (
            <Link
              key={list.id}
              href={`http://localhost:3000/lists/${list.id}`}
              className="flex justify-between items-center"
            >
              <div className="flex gap-2 flex-col mr-6">
                <p>{list.title}</p>

                {list.recipe ? <Badge /> : null}
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
