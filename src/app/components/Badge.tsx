const Badge: React.FC = () => {
  return (
    <div className="bg-orange-200 border-1 border-orange-400 text-orange-400 p-1 rounded w-fit uppercase text-xs flex items-center gap-1">
      <span className="material-symbols-outlined !text-[16px]">restaurant</span>
      Receita anexada
    </div>
  );
};

export default Badge;
