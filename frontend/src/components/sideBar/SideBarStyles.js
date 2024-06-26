import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../themes';

export const SideBar = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: white;
  color: #000;
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 2px 2px 5px 0 rgba(50, 50, 50, 0.75);
  z-index: 1144;
`;

export const SideBarNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #000;
  margin-top: 80px;

  a.active {
    background: rgba(255, 255, 255, 0.05);
    color: #2fc4f8;
    border-bottom: 1px solid #2fc4f8;
    border-radius: 0px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 10px 20px;
    /* border-radius: 5px; */
    font-size: 20px;
    text-transform: uppercase;
    color: #000;
    transition: 0.3s ease-in-out all;

    :hover {
      color: #2fc4f8;
      border-bottom: 1px solid #2fc4f8;
    }
  }
`;

export const CloseSideBarIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;

  svg {
    font-weight: normal;
    cursor: pointer;
    transition: 0.3s ease-in-out all;

    :hover {
      color: red;
    }
  }
`;

export const LogoutBtn = styled.div`
  margin-top: 80px;
`;

export const Button = styled.div`
  position: relative;
  /* width: 130px; */
  width: ${(props) => (props.width ? `${props.width}` : '130px')};
  height: 40px;
  /* margin: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 70px;

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: rgba(255, 255, 255, 0.05); */
    background: ${theme.color.bodyBgColor};
    color: ${theme.color.bgLight};
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    z-index: 1;
    font-weight: 400;
    letter-spacing: 1px;
    overflow: hidden;
    transition: 0.5s;
    text-transform: capitalize;

    :hover {
      letter-spacing: 3px;
      ::before {
        transform: skewX(45deg) translateX(200%);
      }
    }

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.15),
        transparent
      );
      transform: skewX(45deg) translateX(0);
      transition: 0.5s;
    }
  }
`;
