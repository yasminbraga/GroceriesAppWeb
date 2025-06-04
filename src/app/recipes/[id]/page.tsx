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
      <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>

      <section>
        <h3>Ingredientes</h3>

        <ul>
          {recipe.ingredients.map((item) => (
            <li key={item.name}>
              {item.quantity} {item.name}
            </li>
          ))}
        </ul>

        <section>
          <h3>Instruções</h3>
          <p>{recipe.instructions}</p>
        </section>
      </section>
    </>
  );
}
