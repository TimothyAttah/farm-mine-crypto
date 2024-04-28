import React from 'react';
import * as Styles from './HomeStyles';
import plant5 from '../../assets/plant5.jpg';
import Hero from './modules/Hero';
import { Pathway } from './modules/pathway/Pathway';

const Home = () => {
  return (
    <>
      <Hero />
      <Styles.ContentWrapper>
        <Styles.ContentTitle>
          Are you an investor seeking portfolio diversification?
        </Styles.ContentTitle>
        <Styles.ContentTextWrapper>
          <Styles.ContentDescription>
            <p>
              Agriculture as an asset class provides passive income and a hedge
              against inflation, and it’s an attractive investment for a
              diversified portfolio. These investments provide tangible yield
              derived from naturally produced products with little to no
              correlation to the overall stock market and lower risk of loss
              during market corrections, unlike farmland stocks and REITs. Take
              a look at the <a href='/'>Grow Your Wealth With Us</a> page for
              more information.
            </p>
          </Styles.ContentDescription>
          <Styles.ContentImg>
            <img src={plant5} alt='' />
          </Styles.ContentImg>
        </Styles.ContentTextWrapper>
      </Styles.ContentWrapper>
      <Pathway />
    </>
  );
};

export default Home;
