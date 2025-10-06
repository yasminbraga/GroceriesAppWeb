import { signIn } from "@/auth";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="shadow rounded-xl p-6 bg-white w-90">
      <h1>Mercado Plan</h1>

      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData, { callbackUrl: "/recipes" });
        }}
      >
        <label className="flex flex-col gap-2">
          Email
          <input
            type="email"
            name="email"
            className="border-1 border-gray-300 rounded-xl p-4"
          />
        </label>

        <label className="flex flex-col gap-2">
          Senha
          <input
            type="password"
            name="password"
            className="border-1 border-gray-300 rounded-xl p-4"
          />
        </label>

        <Link href={""} className="text-amber-500 underline text-sm">
          Esqueceu sua senha?
        </Link>

        <button className="bg-amber-500 text-white flex items-center justify-center p-4 rounded-xl w-full font-semibold mt-4">
          Entrar
        </button>

        <Link href={""} className="text-amber-500 underline text-sm">
          Não possui conta? Cadastre-se
        </Link>
      </form>
    </div>
  );
};

export default Login;
