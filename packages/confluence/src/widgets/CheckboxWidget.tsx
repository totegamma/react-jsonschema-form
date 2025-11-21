import { Checkbox } from '@forge/react';
import {
  ariaDescribedByIds,
  labelValue,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from '@rjsf/utils';

type SerialisableEvent = {
  target: {
    checked?: boolean;
  };
};

/** The `CheckboxWidget` is a widget for rendering boolean properties.
 *  It is typically used to represent a boolean.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function CheckboxWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    value,
    disabled,
    readonly,
    label,
    hideLabel,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const _onChange = (event: SerialisableEvent) => onChange(event.target.checked || false);
  const _onBlur = (event: SerialisableEvent) => onBlur(id, event.target.checked || false);
  const _onFocus = (event: SerialisableEvent) => onFocus(id, event.target.checked || false);

  return (
    <Checkbox
      id={id}
      name={id}
      label={labelValue(label, hideLabel, '')}
      isChecked={typeof value === 'undefined' ? false : value}
      onChange={_onChange}
      onBlur={!readonly ? _onBlur : undefined}
      onFocus={!readonly ? _onFocus : undefined}
      isDisabled={disabled || readonly}
      autoFocus={autofocus}
      aria-describedby={ariaDescribedByIds(id)}
    />
  );
}
