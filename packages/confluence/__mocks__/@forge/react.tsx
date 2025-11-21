import React from 'react';

// Mock Forge React components for testing
export const Stack = ({ children, ...props }: any) => <div {...props}>{children}</div>;
export const Box = ({ children, ...props }: any) => <div {...props}>{children}</div>;
export const Inline = ({ children, ...props }: any) => <span {...props}>{children}</span>;
export const Heading = ({ children, ...props }: any) => <h3 {...props}>{children}</h3>;
export const Text = ({ children, ...props }: any) => <span {...props}>{children}</span>;
export const Button = ({ children, ...props }: any) => <button {...props}>{children}</button>;
export const Textfield = ({ ...props }: any) => <input type="text" {...props} />;
export const Checkbox = ({ ...props }: any) => <input type="checkbox" {...props} />;
export const CheckboxGroup = ({ ...props }: any) => <div {...props}>Checkbox Group</div>;
export const RadioGroup = ({ ...props }: any) => <div {...props}>Radio Group</div>;
export const Select = ({ ...props }: any) => <select {...props} />;
export const Range = ({ ...props }: any) => <input type="range" {...props} />;
export const DatePicker = ({ ...props }: any) => <input type="date" {...props} />;
export const SectionMessage = ({ children, ...props }: any) => <div {...props}>{children}</div>;
