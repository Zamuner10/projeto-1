import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background: ${theme.colors.white};
    color: ${theme.colors.secondaryColor};
    display: flex;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    opacity: 0.7;
  `}
`;
