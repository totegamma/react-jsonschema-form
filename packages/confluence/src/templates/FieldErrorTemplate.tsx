import { FieldErrorProps, FormContextType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { Text } from '@forge/react';

/** The `FieldErrorTemplate` component renders the errors local to the particular field
 *
 * @param props - The `FieldErrorProps` for the errors being rendered
 */
export default function FieldErrorTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldErrorProps<T, S, F>) {
  const { errors = [], idSchema } = props;
  if (errors.length === 0) {
    return null;
  }
  const id = `${idSchema.$id}__error`;

  return (
    <ul id={id} style={{ color: 'red', fontSize: '0.875rem', listStyle: 'none', padding: 0, margin: '0.25rem 0' }}>
      {errors.map((error, i) => (
        <li key={i}>
          <Text>{error}</Text>
        </li>
      ))}
    </ul>
  );
}
