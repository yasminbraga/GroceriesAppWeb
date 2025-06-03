import Link from "next/link";
export default async function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetch("http://localhost:8080/recipes");
  const recipes: RecipeType[] = await data.json();
  return (
    <div className="flex h-full">
      <div className="border-r-1 border-r-gray-300 w-[300px]">
        <header className="flex items-center justify-between border-b-1 border-b-gray-300 p-4">
          <h2 className="text-lg font-semibold ">Listas</h2>
          <Link
            href={"/lists/create"}
            className="flex items-center gap-2 bg-amber-500 rounded text-white py-1 px-2 font-medium text-sm cursor-pointer"
          >
            <span className="material-symbols-outlined !text-[18px]">add</span>
            <p>Nova lista</p>
          </Link>
        </header>

        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`http://localhost:3000/recipes/${recipe.id}`}
            className="flex justify-between items-center p-4"
          >
            <div className="flex gap-2 flex-col mr-6">
              <p>{recipe.title}</p>

              {/* {recipe.recipe ? <Badge /> : null} */}
            </div>
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        ))}
      </div>
      <article className="p-6 w-full bg-gray-50">{children}</article>
    </div>
  );
}
