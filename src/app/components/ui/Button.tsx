const Button = ({ name }: { name: string }) => {
  return (
    <button className="bg-amber-500 text-white font-semibold text-sm flex items-center justify-center p-2 rounded w-fit cursor-pointer">
      {name}
    </button>
  );
};

export default Button;
