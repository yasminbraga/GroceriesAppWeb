const RecipeCard = ({
  item,
  columnId,
}: {
  item: RecipeType;
  columnId: ColumnStatus["status"];
}) => {
  return (
    <div className="bg-white rounded p-4 flex-1">
      <h4>{item.name}</h4>
    </div>
  );
};

export default RecipeCard;
