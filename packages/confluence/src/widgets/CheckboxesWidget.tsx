import { CheckboxGroup } from '@forge/react';
import {
  ariaDescribedByIds,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from '@rjsf/utils';

/** The `CheckboxesWidget` is a widget for rendering checkbox groups.
 * It is typically used to represent an array of enums.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function CheckboxesWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    disabled,
    options,
    value,
    readonly,
    required,
    onChange,
  } = props;
  const { enumOptions, enumDisabled, emptyValue } = options;

  const checkboxesValues = Array.isArray(value) ? value : [value];

  const _onChange = (selectedValues: string[]) => {
    const newValue = selectedValues.map((val) => enumOptionsValueForIndex(val, enumOptions, emptyValue));
    onChange(newValue);
  };

  const checkboxOptions = enumOptions
    ? enumOptions.map((option, index) => ({
        label: option.label,
        value: String(index),
        isDisabled: Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1,
      }))
    : [];

  const selectedIndices = checkboxesValues
    .map((val) => {
      const index = enumOptionsIndexForValue(val, enumOptions);
      return index !== undefined ? String(index) : undefined;
    })
    .filter((idx): idx is string => idx !== undefined);

  return (
    <CheckboxGroup
      name={id}
      options={checkboxOptions}
      isRequired={required}
      onChange={_onChange}
      defaultValue={selectedIndices}
      isDisabled={disabled || readonly}
      aria-describedby={ariaDescribedByIds(id)}
    />
  );
}
