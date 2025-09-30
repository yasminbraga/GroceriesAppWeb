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
      <div className="mb-4">
        <h3 className="text-3xl font-bold mb-3">{list.title}</h3>
        <p className="text-sm text-gray-400">Criado em: 01/09/2025</p>
      </div>

      <div>
        {list.products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-3 mb-3 text-gray-700"
          >
            <CheckboxInput id={product.id} checked={product.checked} />
            <div className="flex items-center gap-1">
              <p>{product.quantity}</p>
              <p>{product.name}</p>
            </div>
            <DeleteProduct id={product.id} />
          </div>
        ))}
      </div>
    </>
  );
}
