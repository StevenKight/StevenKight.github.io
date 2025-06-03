
import React from 'react'

function ScrollLink({ title }) {

    function Scroll() {
        const section = document.querySelector( `#${title}` );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }
    
    return (
        <div className='scroll-link animated-link'
            style={{
                width: 'fit-content'
            }} 
            onClick={Scroll}>
            <h2 style={{marginBottom: 0}}>
                { title }
            </h2>
        </div>
    );
}

export default ScrollLink;