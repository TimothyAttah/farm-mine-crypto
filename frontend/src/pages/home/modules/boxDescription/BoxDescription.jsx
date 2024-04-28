import React from 'react';
import { FaCamera, FaShieldAlt, FaExpandArrowsAlt } from 'react-icons/fa';

import { BoxDescriptionItem } from './BoxDescriptionItem';
import * as Styles from './BoxDescriptionStyles';
const BoxDescription = ({ title, logo, description }) => {
  return (
    <Styles.BoxDescriptionWrapper>
      <BoxDescriptionItem
        logo={<FaExpandArrowsAlt />}
        title='Expand'
        description="A pathway to growth, whether you're looking to add one more
              section or take on a whole new project."
      />
      <BoxDescriptionItem
        logo={<FaCamera />}
        title='Improve'
        description=' You know what it takes to get the most out of your ground. We help
              you access equity to fund those improvements.'
      />
      <BoxDescriptionItem
        logo={<FaShieldAlt />}
        title='Transition'
        description=' When you need to move from tenant to principal, one generation to
              the next, or one managemant practice to another, we provide a
              potential bridge to funding.'
      />
    </Styles.BoxDescriptionWrapper>
  );
};

export default BoxDescription;
