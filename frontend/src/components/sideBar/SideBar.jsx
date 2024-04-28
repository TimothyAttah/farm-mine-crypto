import React from 'react';
import * as Styles from './SideBarStyles';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { navData } from '../nav/Nav';

const showAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const SideBar = ({ setShowSidebar }) => {
  return (
    <>
      <Styles.SideBar
        variants={showAnimation}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <Styles.CloseSideBarIcon onClick={() => setShowSidebar(false)}>
          <FaTimes />
        </Styles.CloseSideBarIcon>
        <div>
          <Styles.SideBarNavLinks>
            {navData.map((item, i) => (
              <NavLink
                to={item.path}
                key={i}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setShowSidebar(false)}
              >
                <li>{item.name}</li>
              </NavLink>
            ))}
          </Styles.SideBarNavLinks>
        </div>
      </Styles.SideBar>
    </>
  );
};
