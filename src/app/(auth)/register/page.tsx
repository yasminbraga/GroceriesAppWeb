"use client";
import { apiFetch } from "@/app/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    setError("");
    e.preventDefault();

    try {
      const res = await apiFetch("/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          key: "Access-Control-Allow-Credentials",
          value: "true",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow rounded-xl p-6 bg-white w-90">
      <h1>Mercado Plan</h1>

      <form onSubmit={handleSubmit}>
        {error && (
          <div className="p-4 bg-red-100 rounded-xl text-red-400 text-center">
            {error}
          </div>
        )}
        <label className="flex flex-col gap-2">
          Seu nome
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            className="border-1 border-gray-300 rounded-xl p-4"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

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

        <button className="bg-amber-500 text-white flex items-center justify-center p-4 rounded-xl w-full font-semibold mt-4 cursor-pointer">
          Criar conta
        </button>

        <Link href={"/login"} className="text-amber-500 underline text-sm">
          Já possui conta? Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
