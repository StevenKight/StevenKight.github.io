import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import './styles/Section.css';

interface SectionProps {
    icon: IconDefinition;
    title: string;
    className?: string;
    disableHeader?: boolean;
    disableOverlap?: boolean;
    disableFooter?: boolean;
    children: React.ReactNode;
}

function Section({
    icon, title, className,
    disableHeader = false, disableOverlap = false,
    disableFooter = false, children
}: SectionProps) {
    return (
        <div className={`section ${className ?? ''}`} id={title}
            style={{ marginTop: !(disableHeader || disableOverlap) ? '-9.5em' : '' }}>
            {!disableHeader &&
                <div className='section-header'>
                    <h2>
                        <FontAwesomeIcon icon={icon} style={{ marginRight: '15px' }} />
                        {title}
                    </h2>
                </div>
            }
            <div className={!disableHeader ? 'section-body' : 'section-body heading'}
                style={{ paddingBottom: disableFooter ? '0' : '10em' }}>
                {children}
            </div>
        </div>
    );
}

export default Section;
