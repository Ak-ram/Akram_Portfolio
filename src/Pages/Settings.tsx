import { useState } from "react";
import Calendar from "../Components/Calendar";
import CalendarEvents from "../Components/CalendarEvents";
import EmojiComponent from "../Components/emojiComponent";
import ThemeSwitcherBtn from "../Components/themeSwitcherBtn";
const Settings = () => {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <div className="flex">
      <aside>
        <CalendarEvents />
      </aside>
      <Calendar daysClassName={"h-40"} />
    </div>
  );
};

export default Settings;
