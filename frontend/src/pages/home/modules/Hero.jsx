import React from 'react';
import * as Styles from '../HomeStyles';
import BoxDescription from './boxDescription/BoxDescription';

const Hero = () => {
  return (
    <>
      <Styles.HomeContainer>
        <Styles.Title>
          Grow your wealth with passive investments in farming and agribusiness.
        </Styles.Title>
        {/* <div>
        <img src={plant} alt='' />
      </div> */}
        <Styles.SubtitleWrapper>
          <h2>Equity for your next expansion</h2>
          <p>Farm&Mine connects you to the financing you need to scale.</p>
        </Styles.SubtitleWrapper>
        <BoxDescription />
      </Styles.HomeContainer>
    </>
  );
};

export default Hero;
