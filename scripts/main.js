var app = Vue.createApp({
    data(){
        return {
            classes: {
                1: {
                    name: "Systems Programming",
                    instructer: "Raihan",
                    days: "Monday and Wednesday",
                    time: "9:30 AM"
                },
                3: {
                    name: "Information Management",
                    instructer: "Li Yang",
                    days: "Monday and Wednesday",
                    time: "12:30 PM"
                },
                4: {
                    name: "Regression Analysis",
                    instructer: "Fengrong Wei",
                    days: "Tuesday and Thursday",
                    time: "9:30 PM"
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
                        title: "Student Developer (Intern)",
                        dates: {
                            start: "May 2021",
                            end: "Present"
                        }
                    },
                    2: {
                        buisness: "University of West Georgia",
                        url: "https://www.westga.edu/",
                        title: "Student Assistant",
                        dates: {
                            start: "August 2020",
                            end: "May 2021"
                        }
                    },
                    3: {
                        buisness: "RST LLC",
                        url: "https://www.rsttruckrepair.com/",
                        title: "Mechanic / Systems Improvement",
                        dates: {
                            start: "April 2020",
                            end: "July 2021"
                        }
                    },
                    4: {
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
                    "Programming/Markup Languages: Python, Java, HTML, CSS, JavaScript, MySQL, C#, C++, Tensorflow, SciKitLearn, React, ReactNative, ASP.Net, Rust, PostgreSQL, Machine Learning,MatLab", 
                    "Database Management: MySQL, Access",
                    "Graphics: Illustrator, InDesign, Photoshop, GIMP, OnShape, Fusion360",
                ]
            },
            workFeilds: {
                1: {
                    name: "Artificial Intellegence",
                    icon: "./images/work-icons/artificial-intelligence.svg",
                    link: "./ai.html"
                },
                2: {
                    name: "Database",
                    icon: "./images/work-icons/database.svg",
                    link: "./database.html"
                },
                3: {
                    name: "Web Development",
                    icon: "./images/work-icons/web-development.svg",
                    link: "./websites.html"
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