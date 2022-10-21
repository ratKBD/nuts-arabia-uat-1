import { ErrorMessage } from "@hookform/error-message";
import Label from "@modules/account/components/form/Label";
import ChevronDown from "@modules/common/icons/chevron-down";
import clsx from "clsx";
import {
  forwardRef,
  SelectHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { get } from "react-hook-form";

export type NativeSelectProps = {
  placeholder?: string;
  errors?: any;
  touched?: Record<string, unknown>;
  handleValueChange?: any;
  errMsg?: any;
  // setCountry?: any
  // setSelectedCountry?: any
} & SelectHTMLAttributes<HTMLSelectElement>;

// const styles = {
//   select: {
//     "&:focus": {
//       background: "#707070",
//     },
//   },
// }

const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    {
      placeholder = "Select...",
      errors,
      errMsg,
      touched,
      className,
      children,
      handleValueChange,
      ...props
    },
    ref
  ) => {
    const innerRef = useRef<HTMLSelectElement>(null);
    console.log("countryREf", innerRef.current?.value.length);
    const [isPlaceholder, setIsPlaceholder] = useState(false);
    const [borderColor, setBorderColor] = useState(false);
    const [storeValue, setStoreValue] = useState<any>("empty");

    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    );

    const hasError = props.name
      ? get(errors, props.name) && get(touched, props.name)
      : false;
    console.log("hasError-->", hasError);
    console.log("error2", errors);
    console.log("placeholder1", props);
    console.log("children-->", children);
    console.log("setStoreValue", storeValue);
    useEffect(() => {
      // if (innerRef.current && innerRef.current.value === "") {
      if (storeValue === "") {
        setIsPlaceholder(true);
      } else {
        setIsPlaceholder(false);
      }
    }, [/* innerRef.current?.value */ storeValue]);

    return (
      <div>
        <Label label={"Country"} />
        <div
          onFocus={() => {
            setBorderColor(true);
            innerRef.current?.focus();
          }}
          onBlur={() => {
            setBorderColor(false);
            innerRef.current?.blur();
          }}
          style={borderColor ? { borderColor: "" } : {}}
          className={clsx(
            "relative flex items-center text-base-regular rounded-md border border-gray-200 border-opacity-100",
            props.disabled && "bg-gray-200 cursor-not-allowed",
            className,
            {
              "text-gray-500": isPlaceholder,
            }
          )}
          // className="px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
        >
          {/* <select>
            <option>Lulu</option>
          </select> */}
          <select
            // style={styles.select}
            // ref={innerRef}
            name="shipping_address.country_code"
            // onChange={(e) => changeFunc(e)}
            onChange={(e: any) => {
              handleValueChange(e);
              setStoreValue(e.target.value);
              console.log("target Value", e.target.value);
              // console.log("target Name", innerRef.current?.value)
            }}
            // {...props}
            style={{ border: "none", boxShadow: "none", height: "46px" }}
            className={`${
              props.disabled && "bg-gray-200 cursor-not-allowed"
            } appearance-none flex-1 bg-transparent text-sm opacity-75 rounded-md px-4 py-2.5 transition-colors duration-150 outline-none`}
          >
            {/* <option value="">{placeholder}</option> */}
            <option value="" selected>
              Select
            </option>

            {children}
          </select>
          {/* <span className="absolute right-4 inset-y-0 flex items-center pointer-events-none">
            <ChevronDown />
          </span> */}
        </div>
        {/* {hasError && props.name && (
          <ErrorMessage
            errors={errors}
            name={props.name}
            render={({ message }) => {
              return (
                <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
                  <span>{errors?.message}</span>
                </div>
              )
            }}
          />
        )} */}
        {/* {innerRef.current?.value?.length !== 0 ? (
          ""
        ) : (
          <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
            <span>{errors?.message}</span>
          </div>
        )} */}

        {hasError ||
          (errMsg && (
            <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
              <span>{errMsg}</span>
            </div>
          ))}
      </div>
    );
  }
);

NativeSelect.displayName = "NativeSelect";

export default NativeSelect;
