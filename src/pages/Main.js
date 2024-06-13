import { useNavigate } from 'react-router-dom';

import './Main.css';

export default function Main() {

    const navigate = useNavigate();

    function handleNavigation(e, destination) {
        e.preventDefault();
        
        navigate(destination);
    }

    return (
        <div className='Main'>
            <div className="MainContent">
            
                <h1>
                    AI, Optimization, <br/>
                    and UI/UX Specialist
                </h1>
                <h5>
                    I specialize in AI-powered optimization, simulations, and UI/UX design, creating efficient, user-friendly systems <br/>
                    that seamlessly integrate advanced computational techniques with intuitive interfaces.
                </h5>
    
                <h5 className="learnMore">
                    <a onClick={(evt) => handleNavigation(evt, "/about")}>
                        More About Me &#62;
                    </a>
                </h5>
    
            </div>
    
            <img src="/assets/images/headshot.png" alt="Personal Headshot"/>
        </div>
    );
}