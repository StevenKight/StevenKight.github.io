import { useNavigate } from 'react-router-dom';

import './About.css';

export default function About() {

    const navigate = useNavigate();

    function handleNavigation(e, destination) {
        e.preventDefault();
        
        navigate(destination);
    }

    return (
        <div className="About">
            <div className="AboutHeader">
                <h1>
                    About Me
                </h1>
            </div>
            <div className="AboutContent">
                <div className="AboutContentLeft">
                    <p>
                        Hello there! My name is Steven Kight. <br/>
                        <br/>
                        I am a software developer with a passion in research. 
                        I have a background in Computer Science, Mathematics, and Physics working on research in
                        Artificial Intelligence and Simulations.
                        I also have experience and enjoy work in Web Development and Database systems.
                        <br/><br/>
                        I obtained my Associates of Science in Computer Science from <strong>Georgia Highlands College</strong> and 
                        obtained my Bachelor's of Science in Computer Science from the <strong>University of West Georgia</strong>.
                        <br/><br/>
                        I also have a background in Graphic Design with newspapers and smaller projects
                        around my hometown of Rome, Georgia after completing the Adobe Illustrator certification in 2019.
                        <br/><br/>
                        Want to see more? &nbsp;
                        <a onClick={(evt) => handleNavigation(evt, "/works")}>
                            Check out some of my work
                        </a>.
                    </p>
                </div>
                <div className="AboutContentRight">
                    <h3>Tools I Love Using:</h3>
                    <div className="AboutContentLogos">
                        <a href="https://www.python.org/" target="blank">
                            <img class="img-fluid" src="/assets/images/logos/python.png" alt="Python logo" 
                                width="60" />
                        </a>

                        <a>
                            <img class="img-fluid rounded" src="/assets/images/logos/ISO_C++_Logo.svg" alt="C/C++ logo" 
                                width="70" />
                        </a>

                        <a href="https://www.tensorflow.org/" target="blank">
                            <img class="img-fluid" src="/assets/images/logos/tensorflow.png" alt="Tensorflow logo" 
                                width="60" />
                        </a>

                        <a href="https://keras.io/" target="blank">
                            <img class="img-fluid" src="/assets/images/logos/keras.png" alt="Keras logo" 
                                width="60" />
                        </a>

                        <a>
                            <img class="img-fluid" src="/assets/images/logos/web.png" alt="HTML CSS and JavaScript logos" 
                                width="140" height="75"/>
                        </a>

                        <a href="https://pandas.pydata.org/" target="blank">
                            <img class="img-fluid rounded" src="/assets/images/logos/pandas.png" alt="Pandas logo" 
                                width="60" />
                        </a>

                        <a href="https://matplotlib.org/" target="blank">
                            <img class="img-fluid" src="/assets/images/logos/matplotlib.svg" alt="Matplotlib logo" 
                                width="140" />
                        </a>

                        <a>
                            <img class="img-fluid" src="/assets/images/logos/sql.png" alt="SQL logo" 
                                width="70" height="75" />
                        </a>

                        <a href="https://www.mysql.com/" target="blank">
                            <img class="img-fluid" src="/assets/images/logos/mysql.svg" alt="MySQL logo" 
                                width="160" />
                        </a>

                        <a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="blank">
                            <img class="img-fluid" src="/assets/images/logos/excel.png" alt="Excel logo" 
                                width="60" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}