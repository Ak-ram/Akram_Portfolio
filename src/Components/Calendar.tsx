import { useEffect, useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const Calendar = ({ daysClassName }) => {
  const [isDateUpdate, setDateUpdate] = useState(false);
  const [sinceValue, setSinceValue] = useState(true);
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year] = useState(new Date().getFullYear());
  const [timeTick, setTimeTick] = useState(
    new Date().toLocaleTimeString("en-US", {})
  );
  const weekdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri"];
  const monthDays: number[] = []; // Fix Issue => What is "not assignable to parameter of type never" error in TypeScript?
  // const updatedDate = new Date(year, month, day);

  const daysPerMonth: string = new Date(year, month, 0).toLocaleDateString(
    "en-Us",
    {
      day: "2-digit",
    }
  );

  const handleUpdatedDate = (
    y?: "numeric",
    m?: "long",
    d?: "2-digit" | "numeric"
  ) => {
    let res = new Date(year, month, day).toLocaleDateString("en-Us", {
      month: m!,
      year: y!,
      day: d!,
    });
    return res;
  };

  for (let i: number = 1; i <= +daysPerMonth; i++) {
    monthDays.push(i);
  }

  useEffect(() => {
    setInterval(() => {
      setTimeTick(new Date().toLocaleTimeString("en-US", {}));
    }, 1000);
    handleUpdatedDate();
  }, []);

  return (
    <>
      <div className={`w-full`}>
        <div className="w-full">
          <div className="p-5 dark:bg-[#171717] bg-white rounded-t">
            <div className="dark:bg-gray-700/20 p-2 rounded flex items-center justify-between">
              <span
                tabIndex={0}
                className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
              >
                {handleUpdatedDate("numeric", "long")}
              </span>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    setMonth(month - 1);
                    setDay(1);
                  }}
                  aria-label="calendar backward"
                  className="dark:hover:bg-gray-700 focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                >
                  <BiChevronLeft size={25} />
                </button>
                <button
                  type="button"
                  aria-label="calendar forward"
                  className="dark:hover:bg-gray-700 focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                  onClick={() => {
                    setMonth(month + 1);
                    setDay(1);
                  }}
                >
                  <BiChevronRight size={25} />
                </button>
              </div>
            </div>
            {/* 
              Bug: Upscaling elements of days on clicking, which lead to expanding the parent and appear it's scroll bar for milliseconds as a flasing.
              Solve: Add overflow-hidden class in line 106 instead of overflow-x-auto
             */}
            <div className="pt-6">
              <div className="flex flex-nowrap">
                {weekdays.map((day, i) => {
                  return (
                    <div
                      key={`${day}__${i}`}
                      className="w-[14.28%] font-semibold h-8 text-center dark:text-gray-100 justify-center"
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap">
                {["", "", "", ...monthDays].map((day, i) => {
                  return (
                    <div
                      key={`${day}__${i}`}
                      onClick={() => setDay(+day)}
                      // onMouseDown={(e) => {
                      //   setDateUpdate(true);
                      //   e.currentTarget.classList.add("animate-ping-once");
                      // }}
                      // onMouseUp={(e) => {
                      //   setTimeout(() => {
                      //     setDateUpdate(false);
                      //   }, 300);
                      //   e.currentTarget.classList.remove("animate-ping-once");
                      // }}
                      className={`${
                        day.toString().length
                          ? "dark:hover:bg-[#050708]/10 cursor-pointer dark:hover:text-gray-100 "
                          : ""
                      } 
                    ${daysClassName} w-[14.28%] border border-dashed dark:border-gray-600/10 p-1`}
                    >
                      {typeof day === "number" ? day : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="p-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-4">
              <div className="">
                <span className="block mb-2 text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                  {timeTick}
                </span>
                <span className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">
                  Event will be in :
                </span>

                <span
                  className={`${
                    isDateUpdate === true ? "animate-ping-once" : ""
                  } dark:bg-[#171717] dark:text-blue-400 ml-2`}
                >
                  {handleUpdatedDate("numeric", "long", "2-digit")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
