import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border:0;
    box-sizing: border-box;
    font-family: sans-serif;
}

#root {
    background-color: ${({ theme }) => theme.colors.body};
    height: 100vh;
    padding: ${({ theme }) => theme.gridUnit * 4}px;
}
`;
export default GlobalStyles;
