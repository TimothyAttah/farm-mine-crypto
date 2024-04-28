import styled from 'styled-components';
import { theme } from '../../themes';

export const HeaderContainer = styled.header`
  color: #fff;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0px;
  max-width: 1500px;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  /* margin-bottom: -70px; */
  z-index: 999;
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 30px;
`;

export const HeaderMenu = styled.div`
  display: none;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  font-size: 25px;

  svg {
    font-weight: 400;
  }

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    display: flex;
  }
`;
