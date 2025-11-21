import { generateTemplates, generateWidgets, generateTheme, generateForm } from '../src';

describe('@rjsf/confluence', () => {
  it('should export generateTemplates', () => {
    expect(generateTemplates).toBeDefined();
  });

  it('should export generateWidgets', () => {
    expect(generateWidgets).toBeDefined();
  });

  it('should export generateTheme', () => {
    expect(generateTheme).toBeDefined();
  });

  it('should export generateForm', () => {
    expect(generateForm).toBeDefined();
  });

  it('generateTemplates should return an object with template components', () => {
    const templates = generateTemplates();
    expect(templates).toBeDefined();
    expect(templates.FieldTemplate).toBeDefined();
    expect(templates.ObjectFieldTemplate).toBeDefined();
    expect(templates.ArrayFieldTemplate).toBeDefined();
  });

  it('generateWidgets should return an object with widget components', () => {
    const widgets = generateWidgets();
    expect(widgets).toBeDefined();
    expect(widgets.TextWidget).toBeDefined();
    expect(widgets.CheckboxWidget).toBeDefined();
    expect(widgets.SelectWidget).toBeDefined();
  });

  it('generateTheme should return a theme object with templates and widgets', () => {
    const theme = generateTheme();
    expect(theme).toBeDefined();
    expect(theme.templates).toBeDefined();
    expect(theme.widgets).toBeDefined();
  });
});
