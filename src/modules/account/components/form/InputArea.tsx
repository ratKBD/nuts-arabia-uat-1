import React, { useState, useEffect, useImperativeHandle } from "react";
import Label from "./Label";
export interface IInputAreaPropsProps {
  register?: any;
  defaultValue?: any;
  name?: any;
  label?: any;
  type?: any;
  placeholder?: any;
  Icon?: any;
  value?: any;
  onChange?: any;
  minLength?: any;
  maxLength?: any;
  errMsg?: any;
  regex?: any;
  errFor?: any;
  setAState?: any;
  setInputValue?: any;
  inputValue?: any;
  handleValueChange?: any;

  /* className?:any
  autoComplete?:any
  spellCheck?:any
  rows?:any */
}

const InputArea: React.FC<IInputAreaPropsProps> = (
  {
    register,
    defaultValue,
    name,
    label,
    type,
    placeholder,
    Icon,
    value,
    onChange,
    minLength,
    maxLength,
    errMsg,
    regex,
    errFor,
    setAState,
    setInputValue,
    inputValue,
    handleValueChange,
  }: /* className,
    autoComplete,
    spellCheck,
    rows */
  IInputAreaPropsProps,
  ref
) => {
  /* const inputRef = React.useRef<HTMLInputElement>(null) */

  // const [storeInput, setStoreInput] = useState<any>("")

  let hasError: any;

  /*   console.log("inputRef", inputRef?.current) */
  // console.log("inputChar", inputChar)

  /*   useEffect(() => {
    console.log("type", inputRef?.current?.value)
  }, [inputRef?.current?.value])
 */
  /*   useImperativeHandle(ref, () => inputRef?.current!) */
  /*
    if (errors && name && touched) {
      hasError = get(errors, name) && get(touched, name)
      console.log("nameValue", name)
      console.log("errors", errors)
      console.log("touched", touched)
    }

    console.log("inputType", inputType)  */

  return (
    <>
      <Label label={label} />
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
              <Icon />{" "}
            </span>
          </div>
        )}
        <input
          {...register(`${name}`, {
            required: `${label} is required!`,
          })}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          name={name}
          className={
            Icon
              ? "py-2 pl-10 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none  h-11 md:h-12"
              : "py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none  h-11 md:h-12"
          }
          /*  ref={inputRef} */
          value={setInputValue.value}
          onChange={(e) => {
            // setInputValue(e.target.value)
            handleValueChange(e);
          }}
        />
      </div>

      {/* {(hasError ||
        inputValue?.length < minLength ||
        inputValue?.length > maxLength) && (
        <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
          <span>{inputValue?.length === 0 ? "" : errMsg}</span>
        </div>
      )}

      {regex && inputValue.length > 0 ? (
        <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
          <span>
            {regex?.test(inputValue)
              ? ""
              : `You have entered an invalid ${errFor}!`}
          </span>
        </div>
      ) : (
        ""
      )} */}

      {hasError ||
        (errMsg && (
          <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
            <span>{errMsg}</span>
          </div>
        ))}
    </>
  );
};

export default InputArea;
