async function getRecipe(id: number) {
  const res = await fetch(`http://localhost:8080/recipes/${id}`);
  const recipe: RecipeType = await res.json();
  return recipe;
}

export default async function Recipe({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return (
    <>
      <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
    </>
  );
}
