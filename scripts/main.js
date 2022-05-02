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

const checkpoint = 500;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 0 + currentScroll / checkpoint;
  } else {
    opacity = 1;
  }
  document.querySelector("#sections").style.opacity = opacity;
});