import React from 'react';
import classes from './NavigationBar.module.css';
import logo from '../../assets/Imagini/Logo.png';
import { Link as ScrollLink } from 'react-scroll';

const NavigationBar = () => {
  return (
    <nav className={classes.NavigationBar}>
      <div className={classes.NavigationBarLeft}>
        <ScrollLink
          activeClass='activeLogo'
          to='videoSection'
          spy={false}
          smooth={true}
          offset={0}
          duration={500}>
          <img src={logo} alt='Logo' />
        </ScrollLink>
      </div>
      <div className={classes.NavigationBarRight}>
        <ul>
          <li>
            <ScrollLink
              activeClass='activeNavLink'
              to='menu'
              spy={false}
              smooth={true}
              offset={-70}
              duration={500}>
              <a href='/'>Our Menu</a>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass='activeNavLink'
              to='chef'
              spy={false}
              smooth={true}
              offset={0}
              duration={500}>
              <a href='/'>Chef</a>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass='activeNavLink'
              to='topOrders'
              spy={false}
              smooth={true}
              offset={-150}
              duration={500}>
              <a href='/'>Top Orders</a>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass='activeNavLink'
              to='rating'
              spy={false}
              smooth={true}
              offset={-120}
              duration={500}>
              <a href='/'>Rating</a>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass='activeNavLink'
              to='location'
              spy={false}
              smooth={true}
              offset={-110}
              duration={500}>
              <a href='/'>Location</a>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
