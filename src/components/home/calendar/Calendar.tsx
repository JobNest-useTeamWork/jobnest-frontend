import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const Calendar: React.FC<{ email: string }> = ({ email }) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div className="cal-container mt-[60px]">
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={apiKey}
        events={{
          googleCalendarId: `${email}`,
        }}
        eventDisplay={"block"}
        eventTextColor={"#FFF"}
        eventColor={"#F2921D"}
        height={"660px"}
      />
    </div>
  );
};

export default Calendar;
