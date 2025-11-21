import { FormContextType, RJSFSchema, StrictRJSFSchema, TemplatesType } from '@rjsf/utils';

import ArrayFieldItemTemplate from './ArrayFieldItemTemplate';
import ArrayFieldTemplate from './ArrayFieldTemplate';
import DescriptionField from './FieldDescriptionTemplate';
import ErrorList from './ErrorList';
import FieldErrorTemplate from './FieldErrorTemplate';
import FieldTemplate from './FieldTemplate';
import { AddButton, CopyButton, MoveDownButton, MoveUpButton, RemoveButton } from './IconButton';
import ObjectFieldTemplate from './ObjectFieldTemplate';
import SubmitButton from './SubmitButton';
import TitleField from './TitleField';
import WrapIfAdditionalTemplate from './WrapIfAdditionalTemplate';

export function generateTemplates<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): Partial<TemplatesType<T, S, F>> {
  return {
    ArrayFieldItemTemplate,
    ArrayFieldTemplate,
    ButtonTemplates: {
      AddButton,
      CopyButton,
      MoveDownButton,
      MoveUpButton,
      RemoveButton,
      SubmitButton,
    },
    DescriptionFieldTemplate: DescriptionField,
    ErrorListTemplate: ErrorList,
    FieldErrorTemplate,
    FieldTemplate,
    ObjectFieldTemplate,
    TitleFieldTemplate: TitleField,
    WrapIfAdditionalTemplate,
  };
}

export default generateTemplates();
