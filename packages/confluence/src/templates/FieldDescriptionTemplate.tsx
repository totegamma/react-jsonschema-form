import { DescriptionFieldProps, FormContextType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { Box, Text } from '@forge/react';

/** The `DescriptionField` is the template to use to render the description of a field
 *
 * @param props - The `DescriptionFieldProps` for this component
 */
export default function DescriptionField<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({ description }: DescriptionFieldProps<T, S, F>) {
  if (!description) {
    return null;
  }

  if (typeof description === 'string') {
    return <Text>{description}</Text>;
  }

  // For React elements, wrap in a Box
  return <Box>{description}</Box>;
}
