import styled, { css } from 'styled-components';

export const StyledSavings = styled.section`
  ${({ theme }) => css`
    && {
      ${theme.sub_pages.main_page};
    }
  `}
`;
