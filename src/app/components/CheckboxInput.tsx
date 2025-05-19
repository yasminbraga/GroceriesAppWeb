"use client";
import { useState } from "react";

export default function CheckboxInput({
  id,
  checked,
}: {
  id: number;
  checked: boolean;
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = async () => {
    try {
      const newChecked = !isChecked;
      setIsChecked(newChecked);

      await fetch(`http://localhost:8080/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          key: "Access-Control-Allow-Credentials",
          value: "true",
        },
        body: JSON.stringify({ checked: newChecked }),
      });
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
      setIsChecked(!checked);
    }
  };
  return <input type="checkbox" checked={isChecked} onChange={handleChange} />;
}
