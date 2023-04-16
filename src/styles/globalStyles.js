import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` body {
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
font-weight: ${({ theme }) => theme.fontWeight.medium};
font-size: ${({ theme }) => theme.fontSizes.m};
font-style: normal;
color: ${({ theme }) => theme.colors.text};
background-color: ${({ theme }) => theme.colors.background};
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  font-family: inherit;
  color: inherit;
}`;

export default GlobalStyle;
