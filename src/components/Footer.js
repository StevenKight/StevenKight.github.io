
import React from 'react';

import SocialIcons from './SocialIcons';

import './styles/Footer.css';

function Footer() {
  return (
    <div id='footer'>
        <p>
          Copyright &copy; {new Date().getFullYear()} Steven Kight. All rights reserved.
        </p>
        
        <SocialIcons />
    </div>
  );
}

export default Footer;
