import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from "moment";

let allViews = Object.keys(Views).map((k) => Views[k]);

const Calendario = ({ children }) => {
  const localizer = momentLocalizer(moment);
  return (
    <div>
      <Calendar
        views={allViews}
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
      />
    </div>
  );
};

export default Calendario;
