import P from 'prop-types';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="ErroR 404"
      html='<p>Page not found ! <a href="/">Back</a></p>'
    />
  );
};
