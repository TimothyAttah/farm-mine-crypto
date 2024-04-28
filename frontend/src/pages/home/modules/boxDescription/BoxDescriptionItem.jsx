import React from 'react';
import * as Styles from './BoxDescriptionStyles';
export const BoxDescriptionItem = ({ title, logo, description }) => {
  return (
    <Styles.BoxDescriptionContainer>
      <Styles.TitleBox>
        <span>{logo}</span>
        <h2>{title}</h2>
      </Styles.TitleBox>
      <Styles.Description>{description}</Styles.Description>
    </Styles.BoxDescriptionContainer>
  );
};
