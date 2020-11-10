import React, { useState } from "react";
import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt";
import PropTypes from 'prop-types';

export const DatePickerDefault = ({ value, setDataConclusao, ...props }) => {
    const propTypes = {
        onUpdate: PropTypes.func.isRequired
    }

    function parseDate(value) {

        let parts = value.split('/');


        let dataCompleta = new Date(parts[2], parts[1] - 1, parts[0]);
        // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
        return dataCompleta // Note: months are 0-based
    }

    // const getValue = (dataConclusaoPicker) => {
    //     setDataConclusao(dataConclusaoPicker)
    // }
    const [dataConclusaoPicker, setDataConclusaoPicker] = useState(new Date(parseDate(value)));
    // console.log(dataConclusaoPicker)
    const { onUpdate, onBlur, ...rest } = props;
    // console.log(rest)

    const handleUpdate = (e) => {
        setTimeout(() => e.blur())
        const date = new Date(value)
        setDataConclusao(date)
        // setDataConclusaoPicker(date)
        console.log(date)
    }
    console.log(dataConclusaoPicker)
    return (
        <DatePicker
            {...rest}
            name="dataConclusao"
            dateFormat="dd/MM/yyyy"
            locale={pt}
            useShortMonthInDropdown
            selected={dataConclusaoPicker || null}
            onChange={(date) => setDataConclusaoPicker(date)}
            onClickOutside={() => { console.log('qwerty') }}
            minDate={new Date()}
            onBlur={handleUpdate}
        />

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