import styled, {css} from "styled-components";


export const StyledApp = styled.div`
${({theme}) => css`

background: ${theme.colors.green_auxiliary.green_light};
width: 300px;
height: 300px;

& h1 {
  font-family: 'Source Sans 3';
}
`}
`