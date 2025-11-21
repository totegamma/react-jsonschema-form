import { Range } from '@forge/react';
import {
  ariaDescribedByIds,
  FormContextType,
  rangeSpec,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from '@rjsf/utils';

type SerialisableEvent = {
  target: {
    value?: any;
  };
};

/** The `RangeWidget` is a widget for rendering a range/slider input.
 *  It is typically used with numeric properties.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function RangeWidget<
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
    onChange,
    onBlur,
    onFocus,
    schema,
  } = props;

  const { min, max, step } = rangeSpec(schema);

  const _onChange = (newValue: number) => onChange(newValue);
  const _onBlur = (event: SerialisableEvent) =>
    onBlur(id, event.target.value);
  const _onFocus = (event: SerialisableEvent) =>
    onFocus(id, event.target.value);

  return (
    <Range
      id={id}
      name={id}
      min={min}
      max={max}
      step={step}
      value={value || value === 0 ? value : min}
      onChange={_onChange}
      onBlur={!readonly ? _onBlur : undefined}
      onFocus={!readonly ? _onFocus : undefined}
      isDisabled={disabled || readonly}
      aria-describedby={ariaDescribedByIds(id)}
    />
  );
}
