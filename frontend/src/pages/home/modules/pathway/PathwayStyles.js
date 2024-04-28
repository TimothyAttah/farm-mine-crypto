import styled from 'styled-components';
import { theme } from '../../../../themes';

export const PathwayWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  background-color: #9999993d;
  padding: 20px;
`;

export const PathwayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
`;

export const PathwayImgContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 30px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    height: auto;
  }
`;

export const PathwayItemContainer = styled.div`
  width: 280px;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    text-align: center;
  }
`;

export const PathwayItemStep = styled.div`
  background-color: green;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    margin: auto;
  }
`;

export const PathwayItemTitle = styled.h3`
  text-transform: capitalize;
  font-weight: bold;
  padding-top: 10px;
  font-size: 22px;
`;

export const PathwayItemSubtitle = styled.p`
  font-size: 16px;
  padding-top: 5px;
`;

export const PathwayItemDescription = styled.small`
  font-size: 12px;
  display: inline-block;
  padding-top: 15px;
  opacity: 0.8;
`;
