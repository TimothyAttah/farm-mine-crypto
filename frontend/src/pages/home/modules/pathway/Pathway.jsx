import React from 'react';
import { PathwayItem } from './PathwayItem';
import * as Styles from './PathwayStyles';
import pic5 from '../../../../assets/plant6.jpg';

export const Pathway = () => {
  return (
    <Styles.PathwayWrapper>
      <Styles.PathwayContainer>
        <PathwayItem
          step='1'
          stepTitle='identify'
          stepSubtitle='your opportunity'
          description='When you spot the next land project you want to level up your business, reach out to us to outline a potential partnership'
        />
        <PathwayItem
          step='2'
          stepTitle='plan'
          stepSubtitle='your expansion'
          description='Our team will work with you to understand your business proposal and guide you through our due diligence process'
        />
        <PathwayItem
          step='3'
          stepTitle='raise'
          stepSubtitle='passive equity'
          description='You have the opportunity outlined. You have a solid plan in place. Now it’s time to partner with our network of investors.'
        />
        <PathwayItem
          step='4'
          stepTitle='run'
          stepSubtitle='your business'
          description="You're' still in control, but now you're not alone - a network of like-minded investors is behind you. You can leave the complexity of investor relations to us, so you can do what you do best: farm."
        />
      </Styles.PathwayContainer>
      <Styles.PathwayImgContainer>
        <img src={pic5} alt='' />
      </Styles.PathwayImgContainer>
    </Styles.PathwayWrapper>
  );
};
