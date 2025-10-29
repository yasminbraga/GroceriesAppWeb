"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const AuthSection: React.FC = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (session?.user)
    return (
      <section className="flex items-center gap-2 relative">
        <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center">
          <span className="material-symbols-outlined">person</span>
        </div>
        <h3 className="capitalize text-gray-400">{session.user.name}</h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined cursor-pointer text-gray-400">
            keyboard_arrow_down
          </span>
        </button>

        {isOpen && (
          <div className="absolute right-2 top-10 bg-white shadow-lg p-4 rounded-lg min-w-[200px] flex flex-col gap-4">
            <Link href={"/myAccount"} className="hover:text-gray-400">
              Minha conta
            </Link>

            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 cursor-pointer hover:text-gray-400"
            >
              <span className="material-symbols-outlined cursor-pointer">
                logout
              </span>
              Sair
            </button>
          </div>
        )}
      </section>
    );
  else return <Link href={"/login"}>Login</Link>;
};

export default AuthSection;
