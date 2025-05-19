const Sidebar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <aside className="border-r-1 border-r-gray-300 min-w-[300px]">
      <section className="border-b-1 border-b-gray-300 p-6">
        <h2>{title}</h2>
      </section>

      <section></section>
    </aside>
  );
};

export default Sidebar;
