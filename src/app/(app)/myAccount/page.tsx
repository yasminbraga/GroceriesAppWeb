import { auth, signOut } from "@/auth";
import Link from "next/link";

const myAccount: React.FC = async () => {
  const session = await auth();
  return (
    <div>
      <h1>Minha Conta</h1>
      <h2>{session?.user?.email}</h2>

      {session?.user ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button>Logout</button>
        </form>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </div>
  );
};

export default myAccount;
