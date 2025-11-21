# @rjsf/confluence

Atlassian Confluence/Forge UI Kit theme, fields and widgets for [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form).

This theme is designed for use with Atlassian Forge apps running in Confluence, using only [whitelisted UI Kit components](https://developer.atlassian.com/platform/forge/ui-kit/components/).

## Installation

```bash
npm install --save @rjsf/confluence @forge/react
```

## Usage

```tsx
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/confluence';

const schema: RJSFSchema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false }
  }
};

function App() {
  return <Form schema={schema} validator={validator} />;
}
```

## Supported Components

This theme uses only components from the Atlassian Forge UI Kit that are whitelisted for use in Forge apps:

### Widgets
- TextWidget - using `Textfield`
- CheckboxWidget - using `Checkbox`
- CheckboxesWidget - using `CheckboxGroup`
- RadioWidget - using `RadioGroup`
- SelectWidget - using `Select`
- RangeWidget - using `Range`
- DateWidget - using `DatePicker`
- TextareaWidget - using `Textfield`
- PasswordWidget - using `Textfield` with type="password"

### Templates
- FieldTemplate - using `Box` and `Stack`
- ObjectFieldTemplate - using `Stack` and `Box`
- ArrayFieldTemplate - using `Stack` and `Box`
- TitleField - using `Heading`
- DescriptionField - using `Text`
- ErrorList - using `SectionMessage`
- SubmitButton - using `Button`
- IconButtons - using `Button`

## Limitations

Due to the restricted nature of the Forge UI Kit component set compared to other UI frameworks, some advanced features may have limited styling options. The theme prioritizes functionality and adherence to Atlassian's approved component list.

## Documentation

For more information about react-jsonschema-form, please see the [documentation](https://rjsf-team.github.io/react-jsonschema-form/).

For information about the Forge UI Kit, see the [Atlassian Forge documentation](https://developer.atlassian.com/platform/forge/ui-kit/).
