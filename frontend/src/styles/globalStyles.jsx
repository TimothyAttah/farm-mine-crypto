import styled, { createGlobalStyle, css } from 'styled-components';
// import { theme } from '../themes';

export const GlobalStyle = createGlobalStyle`

 :root {

  }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border:0;
    text-decoration: none;
    list-style: none;
  }

  html,
  body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
  }

  body {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    border: 2px solid green;
  }





  ::before,
  ::after {
    box-sizing: border-box;
  }



ul {
  list-style: none;
  li{
    padding: 0;
    margin: 0;
  }
}

${
  '' /* a {
  text-decoration: none;
} */
}

img {
  max-width: 100%;
  vertical-align: middle;

}

button {
  outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

input {
   outline: none;
  border: none;
  :focus {
    outline: none;
  }
}

.scroll-to-top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.scroll-to-top:hover {
  background-color: #0056b3;
}

/* Add a class for fading animation */
  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  /* Apply the animation to the project name */
  .loading-text {
    animation: fadeInOut 2s ease-in-out infinite;
  }
`;

export const Main = styled.div`
  margin-top: 80px;
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0 15px;

  ${(props) =>
    props.primary &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    props.form &&
    css`
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 150px;
    `}
`;
