import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import ApiCalendar from "react-google-calendar-api";
import { set } from "date-fns/esm";
let allViews = Object.keys(Views).map((k) => Views[k]);

const Calendario = ({ children }) => {
  const localizer = momentLocalizer(moment);
  let data = [];
  const [events, setEvents] = useState([]);
  
  function getEventos() {
    ApiCalendar.listUpcomingEvents(150).then(({ result }) => {
      result.items.map((item) => {
        data.push({
          title: item.summary,
          start: new Date(
            item.start.date != null ? item.start.date : item.start.dateTime
          ),
          end: new Date(
            item.end.date != null ? item.end.date : item.end.dateTime
          ),
          allDay: item.start.date == null ? false : true,
        });
      });
      setEvents(data);
    });
  }

  useEffect(() => {
    ApiCalendar.onLoad(() => {
      if (ApiCalendar.sign) {
        getEventos();
      } else {
        ApiCalendar.handleAuthClick();
        getEventos();
      }
    });
  }, []);

  return (
    <div>
      <Calendar
        style={{ height: "100vh" }}
        selectable
        views={allViews}
        localizer={localizer}
        events={events}
        popup
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
      />
    </div>
  );
};

export default Calendario;
