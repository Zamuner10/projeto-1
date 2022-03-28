import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Provident, natus nulla. Facilis corporis optio odio repellendus nemo dicta, nesciunt reprehenderit
    assumenda commodi excepturi iusto nam aut, neque ea laborum.Deleniti!
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div style={{ maxWidth: '64rem', padding: '3rem' }}>
      <TextComponent {...args} />
    </div>
  );
};
