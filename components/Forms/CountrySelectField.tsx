"use client";

import { Controller } from "react-hook-form";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox";
import { countries } from "@/lib/Countries/data";

const CountrySelectField = ({
  name,
  label,
  control,
  error,
  required,
}: CountrySelectProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `Please select ${label.toLowerCase()}` : false,
        }}
        render={({ field }) => (
          <Combobox
            value={field.value}
            onValueChange={field.onChange}
            items={countries}
          >
            <ComboboxInput
              placeholder="Choose your country"
              className="country-select-trigger"
            />
            <ComboboxContent className="bg-gray-800 text-white">
              <ComboboxEmpty>No country found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item.code} value={item.label}>
                    {item.code} {item.label}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
            {error && <p className="text-sm text-red-500">{error.message}</p>}
          </Combobox>
        )}
      ></Controller>
    </div>
  );
};

export default CountrySelectField;
