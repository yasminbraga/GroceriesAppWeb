"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  instructionList: string[];
  setInstructionList: Dispatch<SetStateAction<string[]>>;
};

const InstructionInput: React.FC<Props> = ({
  instructionList,
  setInstructionList,
}) => {
  // const [instructionList, setInstructionList] = useState<string[]>([]);
  const [instruction, setInstruction] = useState<string>("");
  const [increment, setIncrement] = useState(1);

  const handleInstructionList = () => {
    if (instruction) {
      setInstructionList((prevItems) => [...prevItems, instruction]);
      setIncrement(increment + 1);
    }
    setInstruction("");
  };

  const handleEditInstruction = (index: number, value: string) => {
    const oldList = [...instructionList];

    oldList[index] = value;
    setInstructionList(oldList);
  };

  useEffect(() => {
    console.log(instructionList);
  }, [instructionList]);

  return (
    <section>
      <h4 className="font-medium mb-2">Instruções</h4>

      <div className="flex flex-col gap-2">
        {instructionList?.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span>{index + 1}.</span>
            <input
              type="text"
              onChange={(ev) => handleEditInstruction(index, ev.target.value)}
              value={item}
              className="border-1 border-gray-300 rounded-xl p-4 w-full"
            />
          </div>
        ))}
      </div>

      <div className="mt-2">
        <div className="flex items-center gap-2">
          <span>{increment}.</span>
          <input
            type="text"
            placeholder="Digite instruções"
            onChange={(ev) => setInstruction(ev.target.value)}
            value={instruction}
            className="border-1 border-gray-300 rounded-xl p-4 w-full"
          />
        </div>
        <button
          type="button"
          onClick={handleInstructionList}
          className="bg-transparent text-amber-500 border-1 border-amber-500 p-4 rounded-xl font-semibold w-full mt-4"
        >
          Adicionar Instrução
        </button>
      </div>
    </section>
  );
};

export default InstructionInput;
