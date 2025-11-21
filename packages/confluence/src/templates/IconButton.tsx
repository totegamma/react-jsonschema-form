import { FormContextType, IconButtonProps, RJSFSchema, StrictRJSFSchema, TranslatableString } from '@rjsf/utils';
import { Button } from '@forge/react';

/** The `AddButton` renders a button that represent the `Add` action on a form
 */
export function AddButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  uiSchema,
  registry,
  ...props
}: IconButtonProps<T, S, F>) {
  const { translateString } = registry;
  return (
    <Button {...props} appearance="primary">
      {translateString(TranslatableString.AddButton)}
    </Button>
  );
}

/** The `CopyButton` renders a button that represent the `Copy` action on a form
 */
export function CopyButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  uiSchema,
  registry,
  ...props
}: IconButtonProps<T, S, F>) {
  const { translateString } = registry;
  return (
    <Button {...props} appearance="default">
      {translateString(TranslatableString.CopyButton)}
    </Button>
  );
}

/** The `MoveDownButton` renders a button that represent the `MoveDown` action on a form
 */
export function MoveDownButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  uiSchema,
  registry,
  ...props
}: IconButtonProps<T, S, F>) {
  const { translateString } = registry;
  return (
    <Button {...props} appearance="default">
      {translateString(TranslatableString.MoveDownButton)}
    </Button>
  );
}

/** The `MoveUpButton` renders a button that represent the `MoveUp` action on a form
 */
export function MoveUpButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  uiSchema,
  registry,
  ...props
}: IconButtonProps<T, S, F>) {
  const { translateString } = registry;
  return (
    <Button {...props} appearance="default">
      {translateString(TranslatableString.MoveUpButton)}
    </Button>
  );
}

/** The `RemoveButton` renders a button that represent the `Remove` action on a form
 */
export function RemoveButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  uiSchema,
  registry,
  ...props
}: IconButtonProps<T, S, F>) {
  const { translateString } = registry;
  return (
    <Button {...props} appearance="danger">
      {translateString(TranslatableString.RemoveButton)}
    </Button>
  );
}
