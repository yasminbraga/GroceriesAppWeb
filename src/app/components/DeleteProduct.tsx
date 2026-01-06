"use client";

import { useRouter } from "next/navigation";
import { apiFetch } from "../utils/api";

const DeleteProduct = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await apiFetch(`/products/${id}`, {
        method: "DELETE",
        headers: {
          key: "Access-Control-Allow-Credentials",
          value: "true",
        },
      });
      router.refresh();
    } catch (error) {
      console.error("Erro ao deletar o produto", error);
    }
  };

  return (
    <button className="flex items-center cursor-pointer" onClick={handleDelete}>
      <span className="material-symbols-outlined !text-[20px] text-red-700">
        delete
      </span>
    </button>
  );
};

export default DeleteProduct;
