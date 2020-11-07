import React, { useState } from "react";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import pt from "date-fns/locale/pt";
import { format } from 'date-fns'


export const DatePickerDefault = ({ value }) => {

    const [dataConclusao, setDataConclusao] = useState(new Date(value));
    return (
        <DatePicker

            name="dataConclusao"
            dateFormat="dd/MM/yyyy"
            minDate={subDays(new Date(), 0)}
            locale={pt}
            useShortMonthInDropdown
            selected={dataConclusao || null}
            onChange={date => setDataConclusao(date)} />

        //             const { setFieldValue } = useFormikContext(); 
        //   const [field] = useField(props);
        //   return ( format(data.dataConclusao, "dd/MM/yyyy"),
        //     <DatePicker
        //       {...field}
        //       {...props}
        //       selected={(field.value && new Date(field.value)) || null}
        //       onChange={val => {
        //         setFieldValue(field.name, val);
        //       }}
        //     />

    );
};

export default DatePickerDefault;