"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const MainHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="border-b-1 border-b-gray-300 flex items-center justify-between h-[64px] p-4 relative z-50 bg-white">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-amber-500 !text-[28px]">
          menu_book_2
        </span>
        <h1 className="font-bold">MercadoPlan</h1>
      </div>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href={"/lists"}
              className="flex items-center gap-2 text-gray-400"
            >
              <span className="material-symbols-outlined">lists</span>
              <h3>Listas</h3>
            </Link>
          </li>

          <li>
            <Link
              href={"/recipes"}
              className="flex items-center gap-2 text-gray-400"
            >
              <span className="material-symbols-outlined">restaurant</span>
              <h3>Receitas</h3>
            </Link>
          </li>
        </ul>
      </nav>

      {session?.user ? (
        <section className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center">
            <span className="material-symbols-outlined">person</span>
          </div>
          <h3 className="capitalize text-gray-400">{session.user.name}</h3>
          <span className="material-symbols-outlined cursor-pointer text-gray-400">
            keyboard_arrow_down
          </span>
        </section>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}

      <button
        type="button"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          ></div>

          <aside className="relative bg-white w-64 h-full p-6 shadow-lg z-50">
            <h1 className="mb-4">GroceriesApp</h1>
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href={"/lists"}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <span className="material-symbols-outlined">lists</span>
                    <h3>Listas</h3>
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/recipes"}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <span className="material-symbols-outlined">
                      restaurant
                    </span>
                    <h3>Receitas</h3>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
