import Link from "next/link";
import Badge from "../components/Badge";
export default async function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetch("http://localhost:8080/lists");
  const lists: ListType[] = await data.json();
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

        {lists.map((list) => (
          <Link
            key={list.id}
            href={`http://localhost:3000/lists/${list.id}`}
            className="flex justify-between items-center p-4"
          >
            <div className="flex gap-2 flex-col mr-6">
              <p>{list.title}</p>

              {list.recipe ? <Badge /> : null}
            </div>
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        ))}
      </div>
      <article className="p-6 w-full bg-gray-50">{children}</article>
    </div>
  );
}
