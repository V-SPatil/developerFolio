/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vishal Patil",
  title: "Hi all, I'm Vishal",
  subTitle: emoji(
    "A passionate QA Automation Engineer 🚀 having experience in designing robust test frameworks with Selenium, Playwright, and API Automation."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dEml273rNN4exbn-g7JTbPSD0f8swdht/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/V-SPatil",
  linkedin: "https://www.linkedin.com/in/vishal-patil-7b0170194",
  gmail: "vishalgpatil098",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Automation Testing & Quality Engineering",
  skills: [
    "⚡ Designing and developing robust automation frameworks using Selenium, Playwright, and Cypress.",
    "⚡ Automating RESTful API testing with Postman and Rest Assured for reliable backend validation.",
    "⚡ Integrating automated tests into CI/CD pipelines using Jenkins and GitLab CI for seamless delivery.",
    "⚡ Conducting performance and load testing with JMeter and Locust to ensure system scalability.",
    "⚡ Collaborating with cross-functional teams to establish quality processes and ensure bug-free releases.",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Selenium",
    fontAwesomeClassname: "simple-icons:selenium",
    style: { color: "#43B02A" },
  },
  {
    skillName: "Playwright",
    fontAwesomeClassname: "simple-icons:microsoft",
    style: { color: "#5E5E5E" },
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "simple-icons:java",
    style: {
      color: "#007396", // Java's official color
    }
  },
  {
    skillName: "Rest Assured",
    fontAwesomeClassname: "simple-icons:java",
    style: { color: "#007396" },
  },
  {
    skillName: "Jenkins",
    fontAwesomeClassname: "simple-icons:jenkins",
    style: { color: "#D24939" },
  },
  {
    skillName: "Postman",
    fontAwesomeClassname: "simple-icons:postman",
    style: { color: "#FF6C37" },
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/Sppu_logo.png"),
      subHeader: "Master of Science in Computer Applications",
      duration: "September 2020 - April 2022",
      desc: "Participated in the research and published paper named 'Visualizing Security beyond Passwords' which focuses on different methods that can be used for storing passwords safely",
      descBullets: [
        "⚡ Studied core subjects like Data Structures, DBMS, Networking, etc.",
        "⚡ Built mini-projects demonstrating the use of RESTful APIs and backend services.",
        "⚡ Studied Computer Networks, focusing on OSI Model, TCP/IP, and network protocols.",
        "⚡ Hands-on experience with version control systems like Git and GitHub."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "UI/Web Testing", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "API Testing",
      progressPercentage: "70%"
    },
    {
      Stack: "Desktop/app Testing",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Test Software Engineer",
      company: "Cognizant",
      companylogo: require("./assets/images/Logo_Cognizant.png"),
      date: "NOV 2020 – FEB 2023",
      desc: "Developed a modular automation framework that reduced test script development time by 30%, resulting in increase dproductivity.",
      descBullets: [
        "⚡ Designed and developed robust Selenium WebDriver frameworks using Java for end-to-end test automation of web applications.",
        "⚡ Integrated API automation tests into CI/CD pipelines for early feedback on service stability.",
        "⚡ Actively participated in Agile Scrum ceremonies (Sprint Planning, Daily Stand-ups, Retrospective)."
      ]
    },
    {
      role: "Senior QA Automation Engineer",
      company: "Tata Consultancy services",
      companylogo: require("./assets/images/TCS_Logo.jfif"),
      date: "FEB 2023 – Jan 2025",
      desc: " Designed, developed, and maintained automated test scripts using Selenium WebDriver with Java for web application testing.",  
      descBullets: [
        "⚡ Built and maintained scalable automation frameworks (POM, Data-Driven, Hybrid) from scratch to enhance test coverage and efficiency.",
        "⚡ Automated REST API testing using Rest Assured with JSON schema validation, assertions, and request chaining.",
        "⚡ Logged and tracked defects in Jira/Confluence, collaborating with developers for faster resolution."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Playwright Projects",
  subtitle: "✅ Developed an end-to-end test automation framework using Playwright for modern web applications, ensuring fast, reliable cross-browser testing and seamless CI/CD integration.",
  projects: [
    {
      image: require("./assets/images/Playwright_images.png"),
      projectName: "SWAGLabs Playwright automation",
      projectDesc: "✅ Designed and implemented an end-to-end automation testing framework for Swag Labs using Playwright and TypeScript/JavaScript. Automated key user flows such as login, product purchase, cart management, and checkout process. Incorporated best practices like page object model (POM) design, parallel execution, and cross-browser testing. The framework includes detailed reporting and seamless CI/CD integration, ensuring faster test cycles and high reliability in validating UI and functional workflows.",
      footerLink: [
        {
          name: "Visit Code",
          url: "https://github.com/V-SPatil/Playwright-Automation"
          
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/API_Image.jfif"),
      projectName: "API Automation and validations",
      projectDesc: "✅ Developed an automated API testing suite for JSONPlaceholder endpoints using Rest Assured (or Playwright if applicable), validating CRUD operations with schema validations, status codes, and integrated reporting.",
      footerLink: [
        {
          name: "Visit code",
          url: "https://github.com/V-SPatil/Playwright-Automation/APItest.spec.js"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Data Analyst certification",
      image: require("./assets/images/Certificate_image.jfif"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1qSshv8FCTkLZJsSc1_p7Z_4VtSjTi4y_/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9158013556",
  email_address: "vishalgpatil098@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
