import { ReactNode } from 'react';
import { Form } from '@forge/react';

interface ForgeFormWrapperProps {
  children: ReactNode;
  as?: any;
  onSubmit?: (e?: any) => void | Promise<void>;
  [key: string]: any; // Allow other props to be passed through
}

/** The ForgeFormWrapper component wraps the form with Forge's Form component.
 * This allows the form to use Forge's Form component instead of a raw HTML form tag.
 *
 * @param props - The props for this component
 */
export default function ForgeFormWrapper({ children, as, onSubmit, ...otherProps }: ForgeFormWrapperProps) {
  // If 'as' prop is provided, use that instead of Forge Form
  // This maintains compatibility with RJSF's form wrapper pattern
  if (as) {
    const FormTag = as;
    return <FormTag onSubmit={onSubmit} {...otherProps}>{children}</FormTag>;
  }

  // Use Forge's Form component
  // Forge Form requires onSubmit, provide a no-op if not provided
  const handleSubmit = onSubmit || (() => {});
  
  return <Form onSubmit={handleSubmit} {...otherProps}>{children}</Form>;
}
