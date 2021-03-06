import React, { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import * as SC from "./Select.styles";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Select = ({ value, onChange, options }) => {
  const [open, setOpen] = useState(false);

  const ref = useOnclickOutside(() => {
    setOpen(false);
  });

  return (
    <SC.Wrapper onClick={() => setOpen((curr) => !curr)} ref={ref}>
      <SC.Select onChange={onChange} value={value}>
        {options.map((option) => (
          <SC.Option value={option.value} key={option.value}>
            {option.label}
          </SC.Option>
        ))}
      </SC.Select>
      <SC.ArrowWrapper>
        {!open && <FaChevronDown />}
        {open && <FaChevronUp />}
      </SC.ArrowWrapper>
    </SC.Wrapper>
  );
};

export default Select;
