import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text Logo', () => {
    renderTheme(<LogoLink link="#target" text="Testando" />);
    const heading = screen.getByRole('heading', { name: 'Testando' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image Logo', () => {
    renderTheme(<LogoLink link="#target" text="Testando" srcImg="image.jpg" />);
    expect(screen.getByAltText('Testando')).toHaveAttribute('src', 'image.jpg');
  });

  it('should match spanshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Testando" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
