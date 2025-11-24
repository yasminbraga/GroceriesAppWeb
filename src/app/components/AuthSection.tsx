"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import NotificationIcon from "./NotificationIcon";

const AuthSection: React.FC = () => {
  const { data: session } = useSession();
  // const [isOpen, setIsOpen] = useState(false);

  if (session?.user)
    return (
      <section className="flex flex-col items-center gap-2 relative md:flex-row border-t-1 border-gray-200 pt-4 md:border-0 md:pt-0">
        <NotificationIcon />

        <section className="flex flex-col gap-2 w-full md:flex-row">
          <Link
            href={"/myAccount"}
            className="cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center">
                <span className="material-symbols-outlined">person</span>
              </div>
              <span className="text-gray-400">{session.user.name}</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">
              keyboard_arrow_right
            </span>
          </Link>

          <button
            onClick={() => signOut()}
            className="flex items-center gap-2 justify-between cursor-pointer text-red-500 bg-red-100 p-2 rounded font-semibold md:bg-transparent md:p-0"
          >
            <span className="md:hidden">Sair</span>
            <span className="material-symbols-outlined cursor-pointer">
              logout
            </span>
          </button>
        </section>

        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between gap-2 cursor-pointer w-full"
        >
          <div className="flex items-center gap-2">
            <span className="capitalize text-gray-400">
              {session.user.name}
            </span>
          </div>
          <span className="material-symbols-outlined text-gray-400">
            more_vert
          </span>
        </button> */}

        {/* {isOpen && (
          <div className="absolute left-10 md:right-2 md:top-10 bg-white shadow-lg p-4 rounded-lg min-w-[200px] flex flex-col gap-4"></div>
        )} */}
      </section>
    );
  else return <Link href={"/login"}>Login</Link>;
};

export default AuthSection;
