import {
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WrapIfAdditionalTemplateProps,
} from '@rjsf/utils';

export default function WrapIfAdditionalTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  children,
  classNames,
  disabled,
  label,
  onKeyRenameBlur,
  onRemoveProperty,
  readonly,
  required,
  schema,
}: WrapIfAdditionalTemplateProps<T, S, F>) {
  const keyLabel = `${label} Key`; // i18n ?
  const additional = Object.hasOwn(schema, 'additionalProperties');

  if (!additional) {
    return <div className={classNames}>{children}</div>;
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onKeyRenameBlur) {
      onKeyRenameBlur(event);
    }
  };

  const handleRemove = () => {
    if (onRemoveProperty) {
      onRemoveProperty();
    }
  };

  return (
    <div className={classNames}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        <input
          type="text"
          onBlur={!readonly ? handleBlur : undefined}
          defaultValue={label}
          disabled={disabled || readonly}
          required={required}
          placeholder={keyLabel}
          style={{ flex: 1, padding: '4px 8px', border: '1px solid #ccc', borderRadius: '3px' }}
        />
        <button
          type="button"
          onClick={handleRemove}
          disabled={disabled || readonly}
          style={{ padding: '4px 8px', cursor: 'pointer' }}
        >
          Remove
        </button>
      </div>
      {children}
    </div>
  );
}
