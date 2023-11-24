import React, { useState } from "react";

const UseInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const resetInput = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    resetInput,
  };
};

export default UseInput;
