import { DatePicker } from '@forge/react';
import {
  ariaDescribedByIds,
  dateElementProps,
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
    label,
    hideLabel,
    value,
    onChange,
    onBlur,
    onFocus,
    autofocus,
    rawErrors = [],
  } = props;

  const { year, month, day } = dateElementProps(value || '');

  const _onChange = (newValue: string) => {
    onChange(newValue);
  };

  const _onBlur = (event: SerialisableEvent) => onBlur(id, event.target.value);
  const _onFocus = (event: SerialisableEvent) => onFocus(id, event.target.value);

  // Format date as YYYY-MM-DD if we have all parts
  const dateValue =
    year && month && day ? `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}` : '';

  return (
    <DatePicker
      id={id}
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
