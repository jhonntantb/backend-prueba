import React, { useState } from 'react';
import DatePicker from 'react-date-picker';


function Calendary() {
    const [selectedDate,setSelectedDate] = useState(null);
    return (
        <div>
           <DatePicker
           selected={selectedDate}
           onChange={date=>setSelectedDate(date)}
           minDate={new Date()}
            /> 
        </div>
    )
}

export default Calendary
