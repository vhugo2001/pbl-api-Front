import React, { useState, useEffect } from "react";
import { useField, useFormikContext } from "formik";

import CheckIcon from "../../assets/tick.svg";

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
} from "./styles";

function Checkbox({ children, ...props }) {
  const [checked, setChecked] = useState(false);
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const {value} = props;

  useEffect(() => {
    setFieldValue(field.name, false);
  }, [])

  useEffect(() => {
    setFieldValue(field.name, value);
    setChecked(value);
  }, [value])

  function handleCheckboxChange() {
    setChecked(!checked);
    setFieldValue(field.name, !checked);
  }

  return (
    <CheckboxContainer
     
      checked={checked}
      onClick={handleCheckboxChange}
    >
      <HiddenCheckbox
        onChange={handleCheckboxChange}
        checked={checked}
      />
      <StyledCheckbox checked={checked}>
        <img alt="tick icon" style={{ width: "15px" }} src={CheckIcon} />
      </StyledCheckbox>
      <Text checked={checked}>{children}</Text>
    </CheckboxContainer>
  );
}

export default Checkbox;
