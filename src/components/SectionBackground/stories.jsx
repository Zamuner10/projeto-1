import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>SectionBackground</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            eaque quia atque fugiat, ratione qui officiis totam obcaecati
            eligendi sequi, possimus pariatur tempore nihil, sunt laboriosam
            tempora animi hic reprehenderit!
          </p>
        </div>
      </SectionContainer>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
