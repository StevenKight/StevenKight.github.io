
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/Section.css';

function Section({ 
    icon, title, className,
    disableHeader = false, disableOverlap = false, 
    children 
}) {

    return (
        <div className={`section ${className}`} id={title}
            style={{
                marginTop: !(disableHeader || disableOverlap) ? '-3.5em' : ''
            }}>
            {
                !disableHeader ? 
                    <div className='section-header'>
                        <h2>
                            <FontAwesomeIcon icon={icon} style={{marginRight: '15px'}}/>
                            { title }
                        </h2>
                    </div> 
                    : undefined
            }
            <div className={!disableHeader ? 'section-body' : 'section-body heading'}>
                { children }
            </div>
        </div>
    );
}

export default Section;