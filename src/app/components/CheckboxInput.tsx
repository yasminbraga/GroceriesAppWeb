"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiFetch } from "../utils/api";

export default function CheckboxInput({
  id,
  checked,
}: {
  id: number;
  checked: boolean;
}) {
  const [isChecked, setIsChecked] = useState(checked);
  const router = useRouter();
  const handleChange = async () => {
    try {
      const newChecked = !isChecked;
      setIsChecked(newChecked);

      await apiFetch(`/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          key: "Access-Control-Allow-Credentials",
          value: "true",
        },
        body: JSON.stringify({ checked: newChecked }),
      });
      router.refresh();
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
      setIsChecked(!checked);
    }
  };
  return <input type="checkbox" checked={isChecked} onChange={handleChange} />;
}
