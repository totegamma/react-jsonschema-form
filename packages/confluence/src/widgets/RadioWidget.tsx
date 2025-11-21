import { RadioGroup } from '@forge/react';
import {
  ariaDescribedByIds,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from '@rjsf/utils';

type SerialisableEvent = {
  target: {
    value?: any;
  };
};

/** The `RadioWidget` is a widget for rendering a radio group.
 * It is typically used to represent an enum.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function RadioWidget<
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
    onChange,
  } = props;
  const { enumOptions, enumDisabled, emptyValue } = options;

  const _onChange = (event: SerialisableEvent) => {
    onChange(enumOptionsValueForIndex(event.target.value, enumOptions, emptyValue));
  };

  const radioOptions = enumOptions
    ? enumOptions.map((option, index) => ({
        label: option.label,
        value: String(index),
        isDisabled: Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1,
      }))
    : [];

  const selectedIndex = enumOptionsIndexForValue(value, enumOptions);
  const selectedValue = selectedIndex !== undefined ? String(selectedIndex) : undefined;

  return (
    <RadioGroup
      name={id}
      options={radioOptions}
      isRequired={required}
      onChange={_onChange}
      defaultValue={selectedValue}
      isDisabled={disabled || readonly}
      aria-describedby={ariaDescribedByIds(id)}
    />
  );
}
