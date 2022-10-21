import NativeSelect, {
  NativeSelectProps,
} from "@modules/common/components/native-select";
import { useCart, useRegions } from "medusa-react";
import { type } from "os";
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

const CountrySelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ placeholder = "Select", ...props }, ref): any => {
    const innerRef = useRef<HTMLSelectElement>(null);

    // console.log("error5", errors)
    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    );

    const { regions } = useRegions();
    const { cart } = useCart();
    // props.setCountry(innerRef.current?.value)

    // console.log("...props--->", props.setCountry(innerRef.current))
    console.log("outerRef", innerRef);
    console.log("placeholder2", placeholder);

    const countryOptions = useMemo(() => {
      const currentRegion = regions?.find((r) => r.id === cart?.region_id);

      if (!currentRegion) {
        return [];
      }

      return currentRegion.countries.map((country) => ({
        value: country.iso_2,
        label: country.display_name,
      }));
    }, [regions, cart]);
    console.log("label", countryOptions);

    console.log("countryRef", innerRef?.current?.value);

    return (
      <NativeSelect ref={innerRef} placeholder={placeholder} {...props}>
        {countryOptions.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </NativeSelect>
    );
  }
);

CountrySelect.displayName = "CountrySelect";

export default CountrySelect;
