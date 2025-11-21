import {
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WrapIfAdditionalTemplateProps,
} from '@rjsf/utils';
import { Box, Stack, Inline, Textfield, Button } from '@forge/react';

export default function WrapIfAdditionalTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  children,
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
    return <Box>{children}</Box>;
  }

  const handleBlur = (event: any) => {
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
    <Stack space="space.100">
      <Inline space="space.100">
        <Textfield
          onBlur={!readonly ? handleBlur : undefined}
          defaultValue={label}
          isDisabled={disabled || readonly}
          isRequired={required}
          placeholder={keyLabel}
        />
        <Button
          onClick={handleRemove}
          isDisabled={disabled || readonly}
        >
          Remove
        </Button>
      </Inline>
      {children}
    </Stack>
  );
}
