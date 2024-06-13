import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './NavBar.css'

/* eslint jsx-a11y/anchor-is-valid: "off" */
export default function NavBar() {

    const navigate = useNavigate();

    function handleNavigation(e, destination) {
        e.preventDefault();
        
        navigate(destination);
    }

    useEffect(() => {

        let currentActive = document.querySelector(".active");
        if (currentActive) {
            currentActive.classList.remove("active");
        }

        let path = window.location.pathname;

        let root = path.split("/")[1];
        let NavButtons = document.querySelectorAll(".NavButton");

        switch (root) {
            case "":
                document.title = "Steven Kight";
                NavButtons[0].children[0].classList.add("active");
                break;
            case "about":
                document.title = "About | Steven Kight";
                NavButtons[1].children[0].classList.add("active");
                break;
            case "works":
                document.title = "Works | Steven Kight";
                NavButtons[2].children[0].classList.add("active");
                break;
            default:
                document.title = "404 | Steven Kight";
                break;
        }

        // eslint-disable-next-line
    }, [window.location.pathname]);

    return (
        <div className="NavBar">
           <div className="NavBarLeft">
                <div className="NavBarHeader">
                    {/* // eslint-disable-next-line */}
                    <a onClick={(evt) => handleNavigation(evt, "/")}>
                        <h3>
                            Steven Kight
                        </h3>
                    </a>
                </div>
                <div className="NavBarLinks">
                    <div className="NavButton">
                        <a onClick={(evt) => handleNavigation(evt, "/")}>
                            Home
                        </a> 
                    </div>
                    <div className="NavButton">
                        <a onClick={(evt) => handleNavigation(evt, "/about")}>
                            About
                        </a>
                    </div>
                    <div className="NavButton">
                        <a onClick={(evt) => handleNavigation(evt, "/works")}>
                            Works
                        </a>
                    </div>
                </div>
           </div>
            <div className="NavBarRight">
                <a href="mailto:sgk0711@gmail.com" target="blank">
                    <img src="/assets/images/social-icons/envelope.svg" 
                    width="30" alt="email icon"/>
                </a>

                <a href="https://github.com/StevenKight" target="blank">
                    <img src="/assets/images/social-icons/github.svg" 
                    width="30" alt="github icon"/>
                </a>

                <a href="https://www.linkedin.com/in/steven-kight-742729177/" target="blank">
                    <img src="/assets/images/social-icons/linkedin.svg" 
                    width="30" alt="linkedin icon"/>
                </a>
            </div>
        </div>
    )
}