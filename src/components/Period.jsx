import React, { useState } from 'react';
import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Period() {
  const [value, onChange] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
}


export default Period;