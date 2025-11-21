import { Select } from '@forge/react';
import {
  ariaDescribedByIds,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from '@rjsf/utils';

/** The `SelectWidget` is a widget for rendering dropdowns.
 * It is typically used to represent an enum.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function SelectWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    options,
    value,
    required,
    disabled,
    readonly,
    placeholder,
    autofocus,
    onChange,
    rawErrors = [],
  } = props;
  const { enumOptions, enumDisabled, emptyValue } = options;

  const _onChange = (selectedValue: string) => {
    onChange(enumOptionsValueForIndex(selectedValue, enumOptions, emptyValue));
  };

  const selectOptions = enumOptions
    ? enumOptions.map((option, index) => ({
        label: option.label,
        value: String(index),
        isDisabled: Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1,
      }))
    : [];

  const selectedIndex = enumOptionsIndexForValue(value, enumOptions);
  const selectedValue = selectedIndex !== undefined ? String(selectedIndex) : undefined;

  return (
    <Select
      id={id}
      name={id}
      options={selectOptions}
      isRequired={required}
      onChange={_onChange}
      value={selectedValue}
      isDisabled={disabled || readonly}
      autoFocus={autofocus}
      placeholder={placeholder}
      aria-describedby={ariaDescribedByIds(id)}
      isInvalid={rawErrors && rawErrors.length > 0}
    />
  );
}
