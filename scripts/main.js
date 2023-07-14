var app = Vue.createApp({
    data(){
        return {
            classes: {
                1: {
                    name: "",
                    instructer: "",
                    days: "",
                    time: ""
                }
            },
            resumeInfo : {
                contact: {
                    name: {
                        firstName: "Steven",
                        lastName: "Kight"
                    },
                    email: "sgk0711@gmail.com",
                    phone: "7063467899",
                    linkedIn: "https://www.linkedin.com/in/steven-kight-742729177/",
                    city: "Carrollton",
                    state: "Georgia",
                    zip: "30165"
                },
                introduction: "I am a student attending the University of West Georgia. I obtained my Associates of Science in Computer Science from Georgia Highlands college and attending West Georgia for my Bachelor of Science in Computer Science. I am passionate about my research into Artificial Intelligence and in Web Development and Database systems.",
                education: {
                    1: {
                        name: "University of West Georgia",
                        degree: "Bachelor of Science in Computer Science",
                        minor: "Mathematics",
                        concentration: "Data Science",
                        dates: {
                            start: "2022",
                            end: "2024"
                        }
                    },
                    2: {
                        name: "Georgia Highlands College",
                        degree: "Associates of Science in Computer Science",
                        dates: {
                            start: "2019",
                            end: "2021"
                        }
                    },
                    3: {
                        name: "Rome High School",
                        degree: "Highschool Diploma",
                        dates: {
                            start: "2016",
                            end: "2020"
                        }
                    }
                },
                experience: {
                    1: {
                        buisness: "University of West Georgia",
                        url: "https://www.westga.edu/",
                        title: "Software Developer Intern",
                        dates: {
                            start: "May 2023",
                            end: "Present"
                        }
                    },
                    3: {
                        buisness: "University of West Georgia",
                        url: "https://www.westga.edu/",
                        title: "Student Assistant",
                        dates: {
                            start: "August 2020",
                            end: "May 2023"
                        }
                    },
                    4: {
                        buisness: "RST LLC",
                        url: "https://www.rsttruckrepair.com/",
                        title: "Mechanic / Systems Improvement",
                        dates: {
                            start: "April 2020",
                            end: "July 2021"
                        }
                    },
                    5: {
                        buisness: "Six Mile Post",
                        url: "https://sixmilepost.com/",
                        title: "Graphic Designer",
                        dates: {
                            start: "Februaru 2020",
                            end: "May 2020"
                        }
                    }
                },
                skills: [
                    "Programming/Markup Languages: Python, C++, Java, HTML, CSS, JavaScript, React, Vue, React Native, ASP.Net", 
                    "Database Management: MySQL, Access, PostgreSQL",
                    "Graphics: Illustrator, InDesign"
                ]
            },
            workFeilds: {
                1: {
                    name: "Artificial Intellegence",
                    icon: "./images/work-icons/artificial-intelligence.svg",
                    link: "./ai.html"
                },
                2: {
                    name: "Web Development",
                    icon: "./images/work-icons/web-development.svg",
                    link: "./websites.html"
                },
                3: {
                    name: "Database",
                    icon: "./images/work-icons/database.svg",
                    link: "./database.html"
                },
                4: {
                    name: "Graphic Design",
                    icon: "./images/work-icons/graphic-design.svg",
                    link: "./graphics.html"
                },
                5: {
                    name: "Engineering",
                    icon: "./images/work-icons/engineering.svg",
                    link: "./engineering.html"
                }
        }
    };
    }
})