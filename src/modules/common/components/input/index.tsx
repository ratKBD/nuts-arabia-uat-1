import { ErrorMessage } from "@hookform/error-message";
import { useCheckout } from "@lib/context/checkout-context";
import Label from "@modules/account/components/form/Label";
import ShippingAddress from "@modules/checkout/components/shipping-address";
import Eye from "@modules/common/icons/eye";
import EyeOff from "@modules/common/icons/eye-off";
import clsx from "clsx";
import React, { useEffect, useImperativeHandle, useState } from "react";
import { get, useForm, useFormState } from "react-hook-form";

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "placeholder"
> & {
  label: string;
  // errors?: Record<string, unknown>
  errors?: any;
  touched?: Record<string, unknown>;
  name?: string;
  placeholder?: any;
  defaultValue?: any;
  disabled?: any;
  minLength?: any;
  maxLength?: any;
  errMsg?: any;
  regex?: any;
  errFor?: any;
  inputName?: any;
  handleValueChange?: any;
  setValue?: any;
  // register?: any
  required?: any;
  inputValue?: any;
  setInputValue?: any;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      // register,

      inputValue,
      setInputValue,
      setValue,
      handleValueChange,
      inputName,
      errFor,
      regex,
      minLength,
      maxLength,
      errMsg,
      type,
      name,
      label,
      errors,
      touched,
      placeholder,
      required,
      defaultValue,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);
    const [inputChar, setInputChar] = useState<any>("");

    const { cart } = useCheckout();

    console.log("errCart", cart);
    console.log("inputRef", inputRef?.current?.value);
    console.log("inputChar", inputChar.length);
    console.log("required", required);
    console.log("props--->", props);
    console.log("min", minLength);

    useEffect(() => {
      // setInputChar(inputRef?.current?.value)
      // console.log("type", inputRef?.current?.value)
      if (type === "password" && showPassword) {
        setInputType("text");
      }

      if (type === "password" && !showPassword) {
        setInputType("password");
      }
    }, [type, showPassword /* inputRef?.current?.value */]);

    useImperativeHandle(ref, () => inputRef.current!);

    let hasError: any;

    if (errors && name && touched) {
      hasError = get(errors, name) && get(touched, name);
      console.log("nameValue", name);
      console.log("errors", errors);
      console.log("touched", touched);
    }

    console.log("inputType", inputType);
    console.log("hasError", hasError);

    // console.log("register", register)

    return (
      <div>
        {/* <div className="relative z-0 w-full text-base-regular"> */}
        <div className="relative">
          <Label label={label} />
          <input
            type={inputType}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
            // maxLength={maxLength}
            // min={minLength}
            // {...register(name, {
            //   maxLength: {
            //     value: maxLength,
            //     message: "error message", // JS only: <p>error message</p> TS only support string
            //   },
            //   minLength: {
            //     value: minLength,
            //     message: "error message", // JS only: <p>error message</p> TS only support string
            //   },
            // })}
            // value={inputChar}
            // className={clsx(
            //   "pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200",
            //   {
            //     "border-rose-500 focus:border-rose-500": hasError,
            //   }
            // )}
            className={`${
              disabled && "bg-gray-200 cursor-not-allowed"
            } py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none  h-11 md:h-12`}
            {...props}
            ref={inputRef}
            onChange={(e) => {
              handleValueChange(e);
              console.log("target", e.target.value);
              // console.log("typedValue", inputRef?.current?.value)
              // console.log("eventValue", e.target.value)
              // setInputChar(inputRef?.current?.value)
              // setInputValue({ name: e.target.name, value: e.target.value })
            }}
          />
          {/* <label
            htmlFor={name}
            onClick={() => inputRef.current?.focus()}
            className={clsx(
              "mx-3 px-1 transition-all absolute duration-300 top-3 -z-1 origin-0 text-gray-500",
              {
                "!text-rose-500": hasError,
              }
            )}
          >
            {label}
            {required && <span className="text-rose-500">*</span>}
          </label> */}

          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 px-4 focus:outline-none transition-all duration-150 outline-none focus:text-gray-700 absolute right-0 top-3"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          )}
        </div>

        {hasError ||
          (errMsg && (
            <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
              <span>{errMsg}</span>
            </div>
          ))}

        {/* {(inputCharCount === 2 || hasError) && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              return (
                <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
                  <span>{!inputRef?.current?.value ? message : errMsg}</span>
                </div>
              )
            }}
          />
        )} */}

        {/* {(hasError ||
          inputChar?.length < minLength ||
          inputChar?.length > maxLength) && (
          <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
            <span>{inputChar?.length === 0 ? errors?.message : errMsg}</span>
          </div>
        )} */}

        {/* {(hasError ||
          inputChar?.length < minLength ||
          inputChar?.length > maxLength) && (
          <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
            <span>{inputChar?.length === 0 ? errors?.message : errMsg}</span>
          </div>
        )} */}

        {/* {formSubmit && inputRef.current?.value.length === 0 ? (
          <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
            <span>{errors?.message}</span>
          </div>
        ) : (
          ""
        )} */}

        {/* Only Alphabets for first name & last name */}

        {/* {name === "shipping_address.first_name" ||
        name === "shipping_address.last_name" ? (
          <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
            <span>
              {!/^[a-zA-Z]*$/g.test(inputChar)
                ? `Please enter in alphabets only for ${label}!`
                : ""}
            </span>
          </div>
        ) : (
          ""
        )} */}

        {/* email Validation */}
        {/* 
        {regex && inputChar.length > 0 ? (
          <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
            <span>
              {regex?.test(inputChar)
                ? ""
                : `You have entered an invalid ${errFor}!`}
            </span>
          </div>
        ) : (
          ""
        )} */}

        {/* Number Validation for Phone and Postal code */}
        {/* 
        {(hasError &&
          inputChar.length > 1 &&
          name === "shipping_address.postal_code") ||
        (hasError &&
          inputChar.length > 1 &&
          name === "shipping_address.phone") ? (
          <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
            <span>
              {!inputChar?.match(/^\d+/)
                ? `Please only enter numeric characters for ${errFor}!`
                : ""}
            </span>
          </div>
        ) : (
          ""
        )} */}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
// regex?.test(inputChar)
