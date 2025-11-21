import { Textfield } from '@forge/react';
import {
  ariaDescribedByIds,
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

/** The `TextWidget` is a widget for rendering text input fields.
 *  It is typically used with string properties.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function TextWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    placeholder,
    required,
    readonly,
    disabled,
    type,
    label,
    hideLabel,
    value,
    onChange,
    onBlur,
    onFocus,
    autofocus,
    options,
    schema,
    rawErrors = [],
  } = props;

  const _onChange = (event: SerialisableEvent) =>
    onChange(event.target.value === '' ? options.emptyValue : event.target.value);
  const _onBlur = (event: SerialisableEvent) => onBlur(id, event.target.value);
  const _onFocus = (event: SerialisableEvent) => onFocus(id, event.target.value);

  const inputType = (type || schema.type) === 'string' ? 'text' : `${type || schema.type}`;

  return (
    <Textfield
      id={id}
      name={id}
      placeholder={placeholder}
      autoFocus={autofocus}
      isRequired={required}
      isDisabled={disabled || readonly}
      value={value || value === 0 ? value : ''}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      type={inputType}
      aria-describedby={ariaDescribedByIds(id)}
      isInvalid={rawErrors && rawErrors.length > 0}
    />
  );
}
