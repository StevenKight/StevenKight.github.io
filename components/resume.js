app.component('resume', {
    data(){
        return {
            resume: false
        }
    },
    props: {
        resumedata: {
            type: Object,
            required: true
        }
    },
    template: /* html */
    `
    <div class="accordion">
        <div class="accord-item">
            <h2 class="accord-header" id="headingOne">
                <button class="accord-button" id="resume-button" type="button" @click="toggleSection()">
                    Resume
                    <i class="arrow" :class="{up: resume, down: !resume}"></i>
                </button>
            </h2>
            <div id="collapseResume">
                <div class="accord-body" :class="{show: resume, hidden: !resume}">
                    <div class="row mb-3 mt-4">
                        <div class="col-6">
                            <h2>{{ formattedName }}</h2>
                        </div>
                        <div class="col-3">
                            <h6><a :href="phoneURL" id="resumePhone">{{ formattedPhone }}</a> 
                                <br> 
                                <a :href="emailURL">{{ resumedata.contact.email }}</a></h6>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <h3 class="resumeSubheading"><br>Education:</h3>
                        </div>
                    </div>
                    <div v-for="degree in resumedata.education">
                        <div class="row mb-3">
                            <div class="col">
                                <h4>{{ degree.name }}</h4>
                            </div>
                            <div class="col">
                                <h5>{{ degree.degree }}</h5>
                                <h6 v-if="degree.minor">- Minor in {{ degree.minor }}</h6>
                                <h6 v-if="degree.concentration">- Concentration in {{ degree.concentration }}</h6>
                            </div>
                            <div class="col">
                                <h5>{{ formatDates(degree.dates) }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <h3 class="resumeSubheading"><br>Experience:</h3>
                        </div>
                    </div>
                    <div v-for="experience in resumedata.experience">
                        <div class="row mb-3">
                            <div class="col">
                                <h4>
                                    <a :href="experience.url" target="blank">{{ experience.buisness }}</a>
                                </h4>
                            </div>
                            <div class="col">
                                <h5>{{ experience.title }}</h5>
                            </div>
                            <div class="col">
                                <h5>{{ formatDates(experience.dates) }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <h3 class="resumeSubheading"><br>Skills:</h3>
                        </div>
                    </div>
                    <div v-for="skillset in resumedata.skills">
                        <div class="row mb-3">
                            <div class="col-3">

                            </div>
                            <div class="col" style="text-align: left">
                                <h5>{{ skillset }}</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3><a href="./images/pdfs/Resume.pdf" target="_blank">Full Resume</a></h5>
                    </div>
                </div> 
            </div>
        </div> 
    </div>
    `,
    methods: {
        toggleSection(){
            this.resume = !this.resume;

            if (this.resume) {
                setTimeout(() => {
                    var elmntToView = document.getElementById("collapseResume");
                    elmntToView.scrollIntoView();
                }, 100);
            }
            else {
                var elmntToView = document.getElementById("pageTop");
                elmntToView.scrollIntoView();
            }
        },
        formatDates(dates) {
            return dates.start + "-" + dates.end
        }
    },
    computed: {
        formattedPhone() {
            let contactInfo = this.resumedata.contact;
            return contactInfo.phone.slice(0, 3) + "-" + contactInfo.phone.slice(3, 6) + "-" + contactInfo.phone.slice(6);  //xxx-xxx-xxxx
        },
        phoneURL() {
            let contactInfo = this.resumedata.contact;
            return "tel:" + contactInfo.phone; //tel:xxxxxxxxxx
        },
        emailURL() {
            let contactInfo = this.resumedata.contact;
            return "mailto:" + contactInfo.email; //mailto:xxxx@xx.xxx
        },
        formattedCityStateZip() {
            let contactInfo = this.resumedata.contact;
            return contactInfo.city + ", " + contactInfo.state +  " " + contactInfo.zip; //city, state zip
        },
        formattedName() {
            let nameInfo = this.resumedata.contact.name;
            return nameInfo.firstName + " " + nameInfo.lastName
        }
    }
});

