import React, { useState } from 'react';
import DatePicker from 'react-date-picker';


function Calendary() {
    const [selectedDate,setSelectedDate] = useState(null);
    console.log("el dia selecccionado",selectedDate)
    return (
        <div>
           <DatePicker
           selected={selectedDate}
           value={selectedDate}
           onChange={date=>setSelectedDate(date)}
           minDate={new Date()}
           tileDisabled={({activeStartDate, date, view }) => date.getDay() === 0 || date.getDay() === 6 }
           isOpen={true}
            /> 
        </div>
    )
}

export default Calendary
