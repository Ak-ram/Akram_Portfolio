import { useState } from "react";
import Calendar from "../Components/Calendar";
import CalendarEvents from "../Components/CalendarEvents";
const Status = () => {
  interface eventType {
    title: string;
    isDone: boolean;
    time: string;
  }
  const [eventsList, setEventsList] = useState<eventType[]>([]);
  return (
    <div className="flex w-full h-full relative">
      <aside className="">
        <CalendarEvents setEventsList={setEventsList} eventsList={eventsList} />
      </aside>
      {/* <Calendar daysClassName={""} /> */}
    </div>
  );
};

export default Status;