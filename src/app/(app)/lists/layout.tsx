import Link from "next/link";
import Badge from "../components/Badge";
import Dropdown from "../components/ui/Dropdown";
export default async function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetch("http://localhost:8080/lists");
  const lists: ListType[] = await data.json();
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="border-r-1 border-r-gray-300 w-[300px] hidden md:block">
        <header className="flex items-center justify-between border-b-1 border-b-gray-300 p-4">
          <h2 className="text-lg font-semibold">Listas</h2>
          <Link
            href={"/lists/create"}
            className="flex items-center gap-2 bg-amber-500 rounded-md text-white p-2 font-semibold text-sm cursor-pointer"
          >
            <span className="material-symbols-outlined !text-[18px]">add</span>
            <p>Nova lista</p>
          </Link>
        </header>

        <div className="flex flex-col gap-4 p-4">
          {lists.map((list) => (
            <Link
              key={list.id}
              href={`http://localhost:3000/lists/${list.id}`}
              className="flex justify-between items-center"
            >
              <div className="flex gap-2 flex-col mr-6">
                <p>{list.title}</p>

                {list.recipe ? <Badge /> : null}
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-b-1 border-b-gray-300 p-4 md:hidden">
        <h2 className="text-lg font-semibold mb-4">Listas</h2>
        <div className="flex justify-between items-center">
          <Dropdown lists={lists} />
          <Link
            href={"/lists/create"}
            className="flex items-center gap-2 bg-amber-500 text-white font-semibold text-sm cursor-pointer p-2 rounded-md"
          >
            <span className="material-symbols-outlined !text-[18px]">add</span>
            <p>Nova lista</p>
          </Link>
        </div>
      </div>

      <article className="p-6 w-full bg-gray-50 h-full">{children}</article>
    </div>
  );
}
