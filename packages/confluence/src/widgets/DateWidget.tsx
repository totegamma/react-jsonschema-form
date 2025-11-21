import { DatePicker } from '@forge/react';
import {
  ariaDescribedByIds,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from '@rjsf/utils';

/** The `DateWidget` is a widget for rendering date input fields.
 *  It is typically used with string properties in date format.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function DateWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    required,
    readonly,
    disabled,
    value,
    onChange,
    autofocus,
    rawErrors = [],
  } = props;

  const _onChange = (newValue: string) => {
    onChange(newValue);
  };

  // Use the value directly if it's already in ISO format (YYYY-MM-DD)
  const dateValue = value || '';

  return (
    <DatePicker
      name={id}
      isRequired={required}
      isDisabled={disabled || readonly}
      onChange={_onChange}
      defaultValue={dateValue}
      autoFocus={autofocus}
      aria-describedby={ariaDescribedByIds(id)}
      isInvalid={rawErrors && rawErrors.length > 0}
    />
  );
}
