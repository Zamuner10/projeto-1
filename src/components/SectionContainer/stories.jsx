import { SectionContainer } from '.';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eaque
          quia atque fugiat, ratione qui officiis totam obcaecati eligendi
          sequi, possimus pariatur tempore nihil, sunt laboriosam tempora animi
          hic reprehenderit!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
