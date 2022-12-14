import { useState } from "react";
import Calendar from "../Components/Calendar";
import CalendarEvents from "../Components/CalendarEvents";
import PageTitle from "../Components/PageTitle";
const Status = ({ onSidebarHide }) => {
  interface eventType {
    title: string;
    isDone: boolean;
    time: string;
  }
  const [eventsList, setEventsList] = useState<eventType[]>([]);
  return (
    <>
      <PageTitle
        className={""}
        onSidebarHide={onSidebarHide}
        title="Status"
        subtitle={
          <>
            <span className="text-green-500 mr-2">Status :</span>
            <span className="text-gray-500">Performs military service</span>
          </>
        }
        is_premium={true}
        premium_star="Front-end"
      />
      <div className="flex w-full relative">
        <aside className="">
          <CalendarEvents
            setEventsList={setEventsList}
            eventsList={eventsList}
          />
        </aside>
        {/* <Calendar daysClassName={""} /> */}
      </div>
    </>
  );
};

export default Status;
