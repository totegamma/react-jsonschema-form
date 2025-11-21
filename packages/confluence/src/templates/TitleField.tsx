import { FormContextType, TitleFieldProps, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { Heading } from '@forge/react';

/** The `TitleField` is the template to use to render the title of a field
 *
 * @param props - The `TitleFieldProps` for this component
 */
export default function TitleField<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  id,
  title,
  required,
}: TitleFieldProps<T, S, F>) {
  return title ? (
    <Heading as="h3" id={id}>
      {title}
      {required && ' *'}
    </Heading>
  ) : null;
}
