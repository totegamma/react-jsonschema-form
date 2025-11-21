import { ErrorListProps, FormContextType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { SectionMessage, Text } from '@forge/react';

/** The `ErrorList` component is the template that renders the all the errors associated with the fields in the `Form`
 *
 * @param props - The `ErrorListProps` for this component
 */
export default function ErrorList<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  errors,
}: ErrorListProps<T, S, F>) {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <SectionMessage title="Errors" appearance="error">
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {errors.map((error, i) => (
          <li key={i}>
            <Text>{error.stack}</Text>
          </li>
        ))}
      </ul>
    </SectionMessage>
  );
}
