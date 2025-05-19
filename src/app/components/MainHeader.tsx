import Link from "next/link";

const MainHeader: React.FC = () => {
  return (
    <header className="border-b-1 border-b-gray-300 flex items-center gap-12 h-[64px] p-2">
      <h1>GroceriesApp</h1>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href={"/lists"}
              className="flex items-center gap-2 text-gray-400"
            >
              <span className="material-symbols-outlined">lists</span>
              <h3>Listas</h3>
            </Link>
          </li>

          <li>
            <Link
              href={"/recipes"}
              className="flex items-center gap-2 text-gray-400"
            >
              <span className="material-symbols-outlined">restaurant</span>
              <h3>Receitas</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
