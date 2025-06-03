
import React from 'react';

import './styles/SocialIcons.css'

function SocialIcons() {
    return (
        <div className='social-icons'>
            <a href='https://github.com/StevenKight' target='_blank' rel="noopener noreferrer" title='GitHub'>
                <img src='/assets/images/social-icons/github.svg' alt='GitHub Logo'/>
            </a>
            <a href='https://www.linkedin.com/in/steven-kight-742729177/' target='_blank' rel="noopener noreferrer" title='LinkedIn'>
                <img src='/assets/images/social-icons/linkedin.svg' alt='LinkedIn Logo'/>
            </a>
            <a href="/assets/pdfs/Resume - Steven Kight.pdf" download title='Resume'>
                <img src='/assets/images/social-icons/download-svgrepo-com.svg' alt='Download Icon'/>
            </a>
        </div>
    );
}

export default SocialIcons;