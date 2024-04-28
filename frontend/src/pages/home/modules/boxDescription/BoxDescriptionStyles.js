import styled from 'styled-components';
import { theme } from '../../../../themes';

export const BoxDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;
`;

export const BoxDescriptionContainer = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid #fff;
  background: linear-gradient(to right, #0c0e0c, #63630b);
  padding: 10px 15px;
  border-radius: 10px;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    height: 150px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Description = styled.small`
  display: inline-block;
  padding-top: 20px;
  font-size: 12px;
  opacity: 0.7;
`;
