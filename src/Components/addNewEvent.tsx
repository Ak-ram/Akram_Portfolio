import Steps from "./Steps";
import { useState } from "react";
import { BsArrowRightShort, BsCheckCircle } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
const AddNewEvent = ({ className, setHidden }) => {
  const [isCurrentStep, setCurrentStep] = useState<number | "Done">(1);
  const numberOfSteps: number = 3;
  const handleCurrentStep = () => {
    if (+isCurrentStep < numberOfSteps) setCurrentStep(+isCurrentStep + 1);
    if (+isCurrentStep === numberOfSteps) setCurrentStep("Done");
    if (isCurrentStep === "Done") return;
  };
  let StepOneContent = (
    <div className="w-full mt-8">
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Event title:
      </label>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-transparent dark:border-gray-600/30 dark:placeholder-gray-400 dark:text-white"
        placeholder="Type your event here..."
        required
      />
    </div>
  );
  let StepTwoContent = "Step 2";
  let StepThreeContent = "Step 3";
  const stepsContent = [
    { id: null, content: null },
    { id: 1, content: StepOneContent },
    { id: 2, content: StepTwoContent },
    { id: 3, content: StepThreeContent },
  ];

  return (
    <div
      className={`${className} flex-col absolute z-20 flex items-center justify-center absolute top-0 w-full h-full dark:bg-[#171717]`}
    >
      <form className="flex flex-col border w-1/2 p-4  dark:border-gray-600/30 rounded-lg">
        <div className="mb-3 flex items-center justify-between">
          <Steps numberOfSteps={numberOfSteps} isCurrentStep={isCurrentStep} />
          <button
            type="button"
            className="text-red-400 rounded-lg"
            onClick={() => setHidden(true)}
          >
            <IoIosClose className="hover:bg-red-600/10" size={30} />
          </button>
        </div>
        <div className="flex border-t dark:border-gray-600/30 flex-col items-start mb-6">
          {typeof isCurrentStep === "number" ? (
            stepsContent[+isCurrentStep].content
          ) : (
            <span className="flex text-green-400 flex-col items-center mt-8 w-full gap-3">
              <BsCheckCircle size={50} /> Event Add Successfully
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => handleCurrentStep()}
          className="ml-auto inline-flex items-center gap-2 text-blue-400 text-sm sm:w-auto px-3 py-1.5 text-center border dark:border-gray-600/30"
        >
          {isCurrentStep !== "Done" ? (
            <>
              Next <BsArrowRightShort size={20} />
            </>
          ) : (
            "Finish"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddNewEvent;
