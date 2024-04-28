import styled from 'styled-components';
import { theme } from '../../themes';
import plant from '../../assets/plant2.jpg';

export const HomeContainer = styled.div`
  background: url(${plant});
  width: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  padding-bottom: 50px;
  /* position: relative; */
  /* height: 100vh; */
  /* width: 100%; */
  color: #fff;
`;

export const HeroImg = styled.img`
  /* width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; */
`;

export const Title = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 50px;
  text-align: center;
  padding-top: 180px;
  /* margin-top: 180px; */
  /* z-index: 1000; */

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: 30px;
  }
`;

export const SubtitleWrapper = styled.div`
  margin: 0 auto;
  font-size: 20px;
  margin-top: 60px;
  text-align: center;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: 18px;
    margin-top: 30px;
  }
`;

export const BoxDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;
`;

export const ContentWrapper = styled.div`
  max-width: 1300px;
  margin: 30px auto;
`;
export const ContentTitle = styled.h2`
  font-size: 35px;
  text-transform: capitalize;
  text-align: center;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: 30px;
  }
`;
export const ContentTextWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  margin: 50px 0;
  padding: 0 20px;

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    margin: 20px 0;
  }
`;

export const ContentDescription = styled.div`
  width: 600px;
  font-size: 24px;
  line-height: 35px;
  color: #444;

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    width: 100%;
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: 20px;
    line-height: 32px;
  }
`;
export const ContentImg = styled.div`
  width: 500px;

  img {
    width: 100%;
  }

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    width: 100%;
  }
`;
