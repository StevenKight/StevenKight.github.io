app.component('navigation', {
    props: {
        home: {
            type: Boolean,
            required: false
        },
        about: {
            type: Boolean,
            required: false
        },
        work: {
            type: Boolean,
            required: false
        },
        contact: {
            type: Boolean,
            required: false
        }
    },
    template: /* html */
    `
    <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand disabled" href="#">Steven Kight</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item me-4">
                    <a class="nav-link" :class="{ active: home }" href="./">Home</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link" :class="{ active: about }" href="./about.html">About</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link" :class="{ active: work }" href="./work.html">Work</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link" :class="{ active: contact }" href="./contact.html">Contact</a>
                </li>
            </ul>
            <div class="social pe-5">
                <ul>
                    <li class="pe-3">
                        <a href="mailto:sgk0711@gmail.com" target="blank">
                            <img src="./images/social-icons/envelope.svg" 
                            width="30" alt="email icon"></a>
                    </li>
                    <li id="github">
                        <a href="#" target="blank">
                            <img src="./images/social-icons/github.svg" 
                            width="30" alt="github icon"></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/steven-kight-742729177/" target="blank">
                            <img src="./images/social-icons/linkedin.svg" 
                            width="30" alt="linkedin icon"></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
})