import { FieldTemplateProps, FormContextType, RJSFSchema, StrictRJSFSchema, getTemplate, getUiOptions } from '@rjsf/utils';
import { Stack, Box } from '@forge/react';

/** The `FieldTemplate` component is the template used by `SchemaField` to render any field.
 * It renders the field content, (label, description, children, errors, help) inside of a Stack.
 *
 * @param props - The `FieldTemplateProps` for this component
 */
export default function FieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldTemplateProps<T, S, F>) {
  const {
    id,
    children,
    classNames,
    disabled,
    displayLabel,
    hidden,
    label,
    readonly,
    required,
    errors,
    help,
    description,
    schema,
    uiSchema,
    registry,
  } = props;

  const uiOptions = getUiOptions(uiSchema);
  const WrapIfAdditionalTemplate = getTemplate<'WrapIfAdditionalTemplate', T, S, F>(
    'WrapIfAdditionalTemplate',
    registry,
    uiOptions
  );

  if (hidden) {
    return <Box>{children}</Box>;
  }

  return (
    <WrapIfAdditionalTemplate
      classNames={classNames}
      disabled={disabled}
      id={id}
      label={label}
      onKeyRename={props.onKeyRename}
      onKeyRenameBlur={props.onKeyRenameBlur}
      onRemoveProperty={props.onRemoveProperty}
      readonly={readonly}
      required={required}
      schema={schema}
      uiSchema={uiSchema}
      registry={registry}
    >
      <Stack space="space.100">
        {children}
        {displayLabel && description ? description : null}
        {errors}
        {help}
      </Stack>
    </WrapIfAdditionalTemplate>
  );
}
