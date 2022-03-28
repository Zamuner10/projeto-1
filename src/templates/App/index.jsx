import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="blue">
        <Heading> Um texto qualquer</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
