var app = Vue.createApp({
    data(){
        return {
            classes: {
                1: {
                    name: "CS 3152",
                    instructer: "Anja Remshagen",
                    days: "Monday and Wednesday",
                    time: "9:30 AM"
                },
                2: {
                    name: "CS 3211",
                    instructer: "Jonathan Corley",
                    days: "Monday and Wednesday",
                    time: "12:30 PM"
                },
                3: {
                    name: "CS 4275",
                    instructer: "Ana M. Stanescu",
                    days: "Monday and Wednesday",
                    time: "2:00 PM"
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
                introduction: "I am a student attending the University of West Georgia. I obtained my Associates of Science in Computer Science from Georgia Highlands college and attending West Georgia for my Bachelor of Science in Computer Science. I am passionate about my research into Artificial Intellegence and in Web Development and Database systems.",
                education: {
                    1: {
                        name: "West Georgia",
                        degree: "Bachelor of Science in Computer Science",
                        dates: {
                            start: "2022",
                            end: "PRESENT"
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
                        buisness: "RST LLC",
                        url: "https://www.rsttruckrepair.com/",
                        title: "Mechanic / Systems Improvement",
                        dates: {
                            start: "April 2020",
                            end: "July 2021"
                        }
                    },
                    2: {
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
                    "Programming/Markup Languages: Python, C++, Java, HTML, CSS, JavaScript", 
                    "Database Management: MySQL, Access",
                    "Graphics: Illustrator, InDesign"
                ]
            },
            workFeilds: {
                1: {
                    name: "Artificial Intellegence",
                    icon: "./images/work-icons/artificial-intelligence.svg"
                },
                2: {
                    name: "Web Development",
                    icon: "./images/work-icons/web-development.svg"
                },
                3: {
                    name: "Database",
                    icon: "./images/work-icons/database.svg"
                },
                4: {
                    name: "Graphic Design",
                    icon: "./images/work-icons/graphic-design.svg"
                },
                5: {
                    name: "Engineering",
                    icon: "./images/work-icons/engineering.svg"
                }
        }
    };
    },
    methods: {

    },
    calculated: {
        
    }
})