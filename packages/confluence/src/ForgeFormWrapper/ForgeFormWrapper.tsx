import { ReactNode } from 'react';
import { Form } from '@forge/react';

interface ForgeFormWrapperProps {
  children: ReactNode;
  as?: any;
}

/** The ForgeFormWrapper component wraps the form with Forge's Form component.
 * This allows the form to use Forge's Form component instead of a raw HTML form tag.
 *
 * @param props - The props for this component
 */
export default function ForgeFormWrapper({ children, as }: ForgeFormWrapperProps) {
  // If 'as' prop is provided, use that instead of Forge Form
  // This maintains compatibility with RJSF's form wrapper pattern
  if (as) {
    const FormTag = as;
    return <FormTag>{children}</FormTag>;
  }

  // Use Forge's Form component
  return <Form>{children}</Form>;
}
