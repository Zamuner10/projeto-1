import { GoTop } from '.';
export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
        exercitationem error? Ut optio pariatur veniam eveniet praesentium
        inventore saepe odio facere rerum! Quas in reprehenderit officia dicta
        maxime quidem. Quae?
      </h1>
      <GoTop {...args} />
    </div>
  );
};
