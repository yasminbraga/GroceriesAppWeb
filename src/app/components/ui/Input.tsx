type InputType = {
  placeholder: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, label }: InputType) => {
  return (
    <label className="flex gap-2 flex-col w-full mb-4">
      <span className="font-medium">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="border-1 border-gray-300 rounded-xl p-4"
      />
    </label>
  );
};

export default Input;
