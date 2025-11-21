import { ArrayFieldItemTemplateProps, FormContextType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { Stack, Box } from '@forge/react';

/** The `ArrayFieldItemTemplate` component is the template used to render an item of an array.
 *
 * @param props - The `ArrayFieldItemTemplateProps` props for the component
 */
export default function ArrayFieldItemTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldItemTemplateProps<T, S, F>) {
  const {
    children,
    className,
    disabled,
    readonly,
    hasToolbar,
    buttonsProps,
    registry,
  } = props;

  const { ArrayFieldItemButtonsTemplate } = registry.templates;

  return (
    <Box>
      <Stack space="space.100">
        {children}
        {hasToolbar && (
          <ArrayFieldItemButtonsTemplate
            {...buttonsProps}
            disabled={disabled}
            readonly={readonly}
            registry={registry}
          />
        )}
      </Stack>
    </Box>
  );
}
