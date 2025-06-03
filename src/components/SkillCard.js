
import React from 'react';

import './styles/SkillCard.css'

function SkillCard({ img_path, title, ref_link }) {
    return (
        <a href={ref_link}
            target={ref_link !== '' ? '_blank' : ''} 
            rel="noopener noreferrer" 
            className='skill-card'>

            <div className='skill-card-image'>
                <img src={img_path} alt={title + " Image"}/>
            </div>

            <div className='skill-card-title'>
                <h3>
                    { title }
                </h3>
            </div>
        </a>
    );
}

export default SkillCard;