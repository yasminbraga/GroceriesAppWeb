import RecipeDropdown from "@/app/components/ui/RecipeDropdown";
import { apiFetch } from "@/app/utils/api";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const data = await apiFetch("/recipes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!data.ok) {
    return <h2>Erro ao carregar receitas</h2>;
  }
  const recipes: RecipeType[] = await data.json();

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="border-r-1 border-r-gray-300 w-[300px] hidden md:block">
        <header className="flex items-center justify-between border-b-1 border-b-gray-300 p-4">
          <h2 className="text-lg font-semibold ">Receitas</h2>
          <Link
            href={"/recipes/create"}
            className="flex items-center gap-2 bg-amber-500 rounded text-white py-1 px-2 font-medium text-sm cursor-pointer"
          >
            <span className="material-symbols-outlined !text-[18px]">add</span>
            <p>Nova receita</p>
          </Link>
        </header>

        <div className="flex flex-col gap-4 p-4">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="flex justify-between items-center"
            >
              <div className="flex gap-2 flex-col mr-6">
                <p>{recipe.title}</p>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-b-1 border-b-gray-300 p-4 md:hidden">
        <h2 className="text-lg font-semibold mb-4">Receitas</h2>
        <div className="flex justify-between items-center">
          <RecipeDropdown recipes={recipes} />
          <Link
            href={"/recipes/create"}
            className="flex items-center gap-2 bg-amber-500 text-white font-semibold text-sm cursor-pointer p-2 rounded-md"
          >
            <span className="material-symbols-outlined !text-[18px]">add</span>
            <p>Nova receita</p>
          </Link>
        </div>
      </div>

      <article className="p-6 w-full bg-gray-50 h-full">{children}</article>
    </div>
  );
}
