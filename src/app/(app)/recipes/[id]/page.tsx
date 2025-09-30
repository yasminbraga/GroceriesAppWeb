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
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-3">{recipe.title}</h2>
        <p className="text-sm text-gray-400">Criado em: 01/09/2025</p>
      </div>

      <section>
        <h3 className="text-xl font-bold mb-3">Ingredientes</h3>

        <ul>
          {recipe.ingredients.map((item) => (
            <li key={item.name}>
              {item.quantity} {item.name}
            </li>
          ))}
        </ul>

        <section className="mt-4">
          <h3 className="text-xl font-bold mb-3">Instruções</h3>
          <p>{recipe.instructions}</p>
        </section>
      </section>
    </>
  );
}
