import React from "react";

const InputField = ({ heading, inpType, placeHolder, inputId, inputHook }) => {
  return (
    <div className="inputComponent mt-3  w-full mb-1  ">
      {/* input heading  */}

      <h1 className="mb-1.5 font-semibold text-gray-900 dark:text-white ">
        {" "}
        {heading}
      </h1>
      {/* input heading  */}
      {/* input field  */}
      <div className="inputField ">
        <input
          type={inpType}
          id={inputId}
          {...inputHook}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  outline-none focus: block w-full p-2.5 rounded "
          placeholder={placeHolder}
          required
        />
      </div>
      {/* input field  */}
    </div>
  );
};

export default InputField;
