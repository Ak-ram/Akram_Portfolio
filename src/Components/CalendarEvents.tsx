import { useState } from "react";
import AddNewEvent from "./addNewEvent";
import EventStateComponent from "./EventStateComponent";

export interface eventType {
  title: string;
  isDone: boolean;
  time: string;
}
const CalendarEvents = () => {
  const [eventsList, setEventsList] = useState<eventType[]>([]);
  const [isHidden, setHidden] = useState<boolean>(true);
  return (
    <div className="hidden xl:block w-full max-w-sm py-6 px-3 border-b dark:border-gray-700/30">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Welcome
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Events that application book will appear here, click on an event to see
        the details and manage application events
      </p>
      <ul className="my-4 space-y-3">
        {eventsList?.length ? (
          <EventStateComponent events={eventsList} />
        ) : (
          "There is no events"
        )}
      </ul>
      <button
        onClick={() => setHidden(false)}
        className="py-1 px-2 text-white dark:bg-[#1f6feb] dark:hover:bg-blue-700 rounded text-sm"
      >
        New Event
      </button>
      {/* <AddNewEvent setHidden={setHidden} /> */}
      {!isHidden ? (
        <AddNewEvent setEventsList={setEventsList} setHidden={setHidden} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CalendarEvents;
