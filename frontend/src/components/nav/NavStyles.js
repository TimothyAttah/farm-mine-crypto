import styled from 'styled-components';
import { theme } from '../../themes';

export const NavWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  transition: 0.3s ease-in-out all;

  a.active {
    /* color: #2fc4f8; */
    color: #efef1e;
    /* border-bottom: 1px solid #2fc4f8; */
    border-bottom: 1px solid #efef1e;

    border-radius: 0px;
    transition: 0.3s ease-in-out all;
    font-weight: bold;
  }

  a {
    color: #fff;
    padding: 5px 10px;
    transition: 0.3s ease-in-out all;

    :hover {
      color: #efef1e;
      border-bottom: 1px solid #efef1e;
    }
  }

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    display: none;
  }
`;
