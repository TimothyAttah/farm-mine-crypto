import React, { useState } from 'react';
import * as Styles from './HeaderStyles';
import { AnimatePresence } from 'framer-motion';
import { SideBar } from '../sideBar/SideBar';
import { FaBars } from 'react-icons/fa';
import { Nav } from '../nav/Nav';

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Styles.HeaderContainer>
      <Styles.HeaderWrapper>
        <Styles.HeaderContentWrapper>
          <h1>Mine&Farm</h1>
          <Nav />
          <Styles.HeaderMenu>
            <FaBars onClick={() => setShowSidebar(true)} />
          </Styles.HeaderMenu>
        </Styles.HeaderContentWrapper>
      </Styles.HeaderWrapper>
      <AnimatePresence>
        {showSidebar && <SideBar setShowSidebar={setShowSidebar} />}
      </AnimatePresence>
    </Styles.HeaderContainer>
  );
};
