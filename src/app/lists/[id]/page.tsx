import CheckboxInput from "@/app/components/CheckboxInput";
import DeleteProduct from "@/app/components/DeleteProduct";

async function getList(id: number) {
  const res = await fetch(`http://localhost:8080/lists/${id}`);
  const list: ListType = await res.json();
  return list;
}

export default async function List({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const list = await getList(id);

  return (
    <>
      <h3 className="text-xl font-semibold mb-2">{list.title}</h3>

      <div>
        {list.products.map((product) => (
          <div key={product.id} className="flex items-center gap-1">
            <CheckboxInput id={product.id} checked={product.checked} />
            <p>{product.quantity}</p>
            <p>{product.name}</p>
            <DeleteProduct id={product.id} />
          </div>
        ))}
      </div>
    </>
  );
}
