import React from 'react';
import * as Styles from './PathwayStyles';

export const PathwayItem = ({ step, stepTitle, stepSubtitle, description }) => {
  return (
    <Styles.PathwayItemContainer>
      <Styles.PathwayItemStep>{step}</Styles.PathwayItemStep>
      <Styles.PathwayItemTitle>{stepTitle}</Styles.PathwayItemTitle>
      <Styles.PathwayItemSubtitle>{stepSubtitle}</Styles.PathwayItemSubtitle>
      <Styles.PathwayItemDescription>
        {description}
      </Styles.PathwayItemDescription>
    </Styles.PathwayItemContainer>
  );
};
