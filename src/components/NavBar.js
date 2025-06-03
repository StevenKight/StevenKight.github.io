
import React from 'react';

import SocialIcons from './SocialIcons';
import ScrollLink from './ScrollLink';

import useScrollPosition from '../hooks/useScrollPosition';

import './styles/NavBar.css';

function NavBar() {

  const scrollY = useScrollPosition();

  return (
    <div className={`navbar ${scrollY > 0 ? 'border' : ''}`}>
      <h2>
        Steven Kight
      </h2>

      <div id='pages'>
        <ScrollLink title="Home" />
        <ScrollLink title="About" />
        <ScrollLink title="Skills" />
        <ScrollLink title="Projects" />
        <ScrollLink title="Contact" />
      </div>

      <SocialIcons />
    </div>
  );
}

export default NavBar;
