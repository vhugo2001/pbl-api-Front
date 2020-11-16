import React, {useEffect} from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { BsFillCaretDownFill } from "react-icons/bs";

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default DatePickerField;
