"use client";
import Input from "@/app/components/ui/Input";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="shadow rounded-xl p-6 bg-white w-90">
      <h1>GroceriesApp</h1>

      <form>
        <Input placeholder="Email" label="Email" handleValue={() => {}} />

        <Input placeholder="Senha" label="Senha" handleValue={() => {}} />
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
