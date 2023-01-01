import { useSpring, animated } from "react-spring";
import {BsCheckCircle} from "react-icons/bs"
import {HiOutlineTrendingDown,HiOutlineTrendingUp} from "react-icons/hi"
import Image from "./Image";

function NameCard({
  name,
  id,
  position,
  transactionAmount,
  rise,
  tasksCompleted,
  imgId,
  className,
}) {
  const { transactions, barPlayhead } = useSpring({
    transactions: transactionAmount,
    barPlayhead: 1,
    from: { transactions: 0, barPlayhead: 0 },
  });

  return (
    <div className={`${className}`}>
      <div className="rounded-lg bg-card flex justify-between p-3 h-32">
        <div className="">
          <div className="flex items-center">
            <Image path={`mock_faces_${imgId}`} className="w-10 h-10" />
            <div className="ml-2">
              <div className="flex">
                <div className="mr-2 font-bold text-white">{name}</div>
                <BsCheckCircle size={18} className="dark:text-green-400"/>
              </div>
              <div className="text-sm ">{position}</div>
            </div>
          </div>

          <div className="text-sm  mt-2">{`${tasksCompleted} from 5 tasks completed`}</div>
          <svg
            className="w-44 mt-3"
            height="6"
            viewBox="0 0 200 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="200" height="6" rx="3" fill="#2D2D2D" />
            <animated.rect
              width={barPlayhead.to((i) => i * (tasksCompleted / 5) * 200)}
              height="6"
              rx="3"
              fill="url(#paint0_linear)"
            />
            <rect x="38" width="2" height="6" fill="#171717" />
            <rect x="78" width="2" height="6" fill="#171717" />
            <rect x="118" width="2" height="6" fill="#171717" />
            <rect x="158" width="2" height="6" fill="#171717" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#8E76EF" />
                <stop offset="1" stopColor="#3912D2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col items-center">

          {rise ? <HiOutlineTrendingUp className="text-green-500" size={30} /> :<HiOutlineTrendingDown className="text-red-500" size={30}/>}
          <animated.div
            className={`${rise?"text-green-500":"text-red-500"} text-lg font-bold`}
          >
            {transactions.to((i) => `$${i.toFixed(2)}`)}
          </animated.div>
          <div className="text-sm ">Last 6 month</div>
        </div>
      </div>
    </div>
  );
}

export default NameCard;
