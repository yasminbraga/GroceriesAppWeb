import RecipeCard from "./RecipeCard";

export default function Column({ title, bg_color, id, recipes }: ColumnType) {
  return (
    <div className={`h-full rounded p-4 flex-1 ${bg_color}`} key={id}>
      <header>
        <h3>{title}</h3>
      </header>

      <div>
        {recipes ? (
          recipes?.map((item) => (
            <RecipeCard key={item.name} item={item} columnId={id} />
          ))
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
