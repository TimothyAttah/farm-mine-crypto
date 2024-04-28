import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styles from './NavStyles';
export const navData = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Invest Now',
    path: '/invest_now',
  },
  {
    name: 'About Us',
    path: '/about_us',
  },
  {
    name: 'FAQS',
    path: '/faqs',
  },
];
export const Nav = () => {
  return (
    <Styles.NavWrapper>
      {navData.map((nav, i) => (
        <NavLink
          to={nav.path}
          key={i}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <li>{nav.name}</li>
        </NavLink>
      ))}
    </Styles.NavWrapper>
  );
};
