import { useState } from "react";
import { IoIosClose, IoIosArrowDown } from "react-icons/io";
const Combobox = ({ options }) => {
  const [isCollapsed, setCollapsing] = useState(true);
  const [filteredRes, setFilteredRes] = useState(options);
  const [value, setValue] = useState<string>("");
  const filterOptionsArray = (receivedValue: string): void => {
    const res = options.filter((item: string) =>
      item.toLowerCase().includes(receivedValue.toLowerCase())
    );
    setFilteredRes(res);
  };
  const handleSearchValue = (e: React.SyntheticEvent): void => {
    const target = e.currentTarget as HTMLInputElement;
    setValue(target.value);
    setCollapsing(false);
    filterOptionsArray(target.value);
  };
  const resetSearchValue = () => {
    setValue("");
    filterOptionsArray("");
  };
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <div className="dark:bg-transparent dark:border dark:border-gray-800 h-9 bg-white flex rounded items-center">
            <input
              onInput={handleSearchValue}
              value={value}
              name="select"
              id="select"
              placeholder="Choose option"
              className="dark:bg-transparent px-1.5 appearance-none outline-none text-gray-200 w-full"
            />
            <button
              type="button"
              onClick={resetSearchValue}
              className="border-r dark:border-gray-700 cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-rose-400"
            >
              <IoIosClose size={25} />
            </button>
            <label
              onClick={() => setCollapsing(!isCollapsed)}
              htmlFor="show_more"
              className="cursor-pointer outline-none focus:outline-none  border-gray-200 transition-all text-gray-300 hover:text-gray-400 mr-2 ml-1"
            >
              <IoIosArrowDown size={18} />
            </label>
          </div>

          <input
            type="checkbox"
            name="show_more"
            id="show_more"
            className="hidden"
          />
          <div
            className={`${
              isCollapsed || !filteredRes.length ? "hidden" : ""
            } slide-bottom absolute dark:border-[#353535] rounded shadow bg-white overflow-hidden flex-col w-full mt-1 border border-gray-200`}
          >
            {/* Bug: when filteredRes is empty array [], then the border of the parent element appear as a strong line in the UI,
                Solve: add `|| !filteredRes.length` in line 59 to hide the whole parent in case of mismatching results
             */}
            {filteredRes &&
              filteredRes?.map((option: number | string) => {
                return (
                  <div
                    key={option}
                    className="cursor-pointer group block border-l-4 dark:bg-card dark:border-b dark:border-b-[#353535] border-l-transparent dark:hover:text-blue-400 hover:border-blue-600 p-2"
                    onClick={() => {
                      setCollapsing(true);
                      setValue(option as string);
                    }}
                  >
                    {option}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combobox;
