import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    @media ${theme.media.IteMedium} {
      grid-template-columns: 1fr;
      text-align: justify;
    }
    ${Title} {
      text-align: center;
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    text-align: justify;
    @media ${theme.media.IteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 10rem;
    margin-left: 25rem;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;
