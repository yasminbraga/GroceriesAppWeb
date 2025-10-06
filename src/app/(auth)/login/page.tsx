"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/myAccount",
    });

    if (res.ok) {
      router.push("/myAccount");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="shadow rounded-xl p-6 bg-white w-90">
      <h1>Mercado Plan</h1>

      <form onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2">
          Email
          <input
            type="email"
            name="email"
            placeholder="seu-email@mail.com"
            className="border-1 border-gray-300 rounded-xl p-4"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label className="flex flex-col gap-2">
          Senha
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            className="border-1 border-gray-300 rounded-xl p-4"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
