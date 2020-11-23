import React, {useEffect} from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { BsFillCaretDownFill } from "react-icons/bs";

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const handleChange = (value) => {
    setFieldValue(field.name, value);
  }


  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={handleChange}
    />
  );
};

export default DatePickerField;
