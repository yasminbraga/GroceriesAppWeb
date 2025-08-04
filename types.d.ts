type RecipeType = {
  id: number;
  title: string;
  ingredients: Array<{ name: string; quantity: string }>;
  instructions: string[];
};

type ListType = {
  id: number;
  title: string;
  products: Array<{
    id: number;
    name: string;
    quantity: string;
    checked: boolean;
  }>;
  recipe: RecipeType | null;
};
