import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    fibotalk,
    cn,
    authapp,
    placement,
    summizy,
    Spin,
    Vision,
    ipod,
    cynthia,
    expense,
    blog,
    java,
    mysql

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "project",
        title: "Project",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: mobile,
    },
    {
        title: "React Native Developer",
        icon: backend,
    },
    {
        title: "Full stack Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Java",
        icon: java,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    
    {
        name: "TypeScript",
        icon: typescript,
    },
    
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "MySql",
        icon: mysql,
    },
    {
        name: "Three JS",
        icon: threejs,
    }, 
];

const experiences = [
    {
        title: "Software Development Intern",
        company_name: "Fibotalk(Cubestack)",
        icon: fibotalk,
        iconBg: "#383E56",
        date: "February 2023 - May 2023",
        points: [
            "Developed a Full-Stack Website (Haxo) using Angular, Node.js, Express.js, and JWT for secure authentication.",
            "Designed and developed RESTful APIs for seamless communication between frontend and backend components, following best practices for resource endpoints and HTTP methods.",
            "Collaborated closely with the designer to enhance UI/UX and resolve issues based on design mockups and wireframes, resulting in an improved user experience.",
            "Wrote complex, high-performance, and well-documented code to ensure maintainability and robustness.",
        ],
    },
    {
        title: "Full stack Development Trainee",
        company_name: "Coding Ninjas",
        icon: cn,
        iconBg: "#E6DEDD",
        date: "Sept 2022 - Aug 2023",
        points: [
            "Proficiently mastered essential Data Structures and Algorithms using Java, enhancing problem-solving abilities and algorithmic thinking.",
            "Skillfully developed captivating user interfaces by harnessing React, showcasing a deep understanding of modern front-end development practices",
            "Effectively acquired expertise in back-end development with Node.js, enabling the creation of robust and efficient server-side applications",
            "Successfully completed comprehensive Full Stack training using the MERN stack, allowing for seamless end-to-end application development. Additionally, created projects such as an Expense Tracker and implemented Node.js authentication, reflecting practical knowledge gained during the training",
        ],
    },
    
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Expense Tracker",
        description:
            "Developed a user-friendly Expense Tracker app using React.js, facilitating efficient management of users' financial transaction Implemented features to seamlessly add, categorize, edit, and delete expenses, offering a comprehensive overview of income and expenditures. Utilized CSS modules for targeted styling and ensured responsive design.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            
        ],
        image: expense,
        source_code_link: "https://github.com/Saif-09/Expense-Tracker",
    },
    {
        name: "Summizy AI Article Summerizer",
        description:
            "Developed this Article Summerizer using React, Redux, and Tailwind CSS. By seamlessly integrating Rapid API, Summizy takes any lengthy article URL and transforms it into a concise and easily digestible summary. Empowered by React's dynamic user interface, Redux's state management, and Tailwind CSS's sleek styling, ",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "green-text-gradient",
            },
            
        ],
        image: summizy,
        source_code_link: "https://github.com/Saif-09/Summizy-Ai-Article-Summarizer",
    },
    {
        name: "Authentication Service",
        description:
            "Proficiently designed and implemented a robust backend service utilizing NodeJS, ExpressJS, and MongoDB.Skillfully integrated JSON Web Tokens (JWT) for secure and efficient user authentication. Seamlessly facilitated user account management through intuitive User Signup and Login functionalities.",
        tags: [
            {
                name: "node.js",
                color: "blue-text-gradient",
            },
            {
                name: "Express JS",
                color: "pink-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "blue-text-gradient",
            },
            {
                name: "jwt",
                color: "pink-text-gradient",
            },
        ],
        image: authapp,
        source_code_link: "https://github.com/Saif-09/NodeJS-Authentication",
    },
    {
        name: "Blogs App",
        description:
            "Developed a Blogs Posting app using React.js, enabling users to publish articles effortlessly. Enabled users to add and delete blogs, with data stored in a Firebase database. Ensured mobile and desktop responsiveness through strategic use of Tailwind CSS.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind Css",
                color: "pink-text-gradient",
            },
        ],
        image: blog,
        source_code_link: "https://github.com/Saif-09/Blogs-App",
    },
    {
        name: "Cynthia Website Clone",
        description:
            "Cynthia Ugwu Website is a award winner website because of it's smoothness, it's animation and simplicity. This project is a clone of Cynthia Ugwu Website just to learn the advance animation effects",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "html5",
                color: "green-text-gradient",
            },
            {
                name: "css3",
                color: "pink-text-gradient",
            },
            {
                name: "GSAP",
                color: "green-text-gradient",
            },
            {
                name: "locomotive",
                color: "blue-text-gradient",
            },
            {
                name: "smoothScroll",
                color: "pink-text-gradient",
            },
        ],
        image: cynthia,
        source_code_link: "https://github.com/Saif-09/Cynthia-Ugwu-Website-Clone",
    },
    {
        name: "Placement Tracker App",
        description:
            "Created an interface enabling company employees to input data into the database and effortlessly generate CSV reports and download it. Implemented user registration and sign-in functionalities for easy access to the dashboard.U tilized Node.js, MongoDB, and Express, along with RESTful API and technologies like Fast-csv and ejs, to deliver a seamless data management and reporting solution.",
        tags: [
            {
                name: "express js",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: placement,
        source_code_link: "https://github.com/Saif-09/Placement_Cell-CN-Project",
    },
    {
        name: "I Pod React App",
        description:
            "Developed an i-pod-inspired UI, integrating functionalities to access i-pod features as a web app. Enhanced user experience by providing an interactive menu list and enabling users to play a selection of songs. Most importantly I used class based components to make this project",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css3",
                color: "pink-text-gradient",
            },
        ],
        image: ipod,
        source_code_link: "https://github.com/Saif-09/i-pod-react-project",
    },
    {
        name: "Apple Vision Pro Web Clone",
        description:
            "Crafted an app to showcase fluid animation effects, closely emulating Apple Vision Pro's website. Offered users an immersive experience, allowing them to interact with animations and scroll effects using tools like gsap, locomotive, scrolltrigger and canvas",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "css3",
                color: "pink-text-gradient",
            },
            {
                name: "html5",
                color: "green-text-gradient",
            },
            {
                name: "gsap",
                color: "pink-text-gradient",
            },
            {
                name: "locomotive",
                color: "blue-text-gradient",
            },
            {
                name: "canvas",
                color: "green-text-gradient",
            },
        ],
        image: Vision,
        source_code_link: "https://github.com/Saif-09/Clone-Apple-Vison-Website",
    },
    {
        name: "Spinning Wheel",
        description:
            "Crafted an app to showcase css effects and javascript functionalities, When the user spin while at first it always give try again.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "css3",
                color: "pink-text-gradient",
            },
            {
                name: "html5",
                color: "blue-text-gradient",
            },
            
        ],
        image: Spin,
        source_code_link: "https://github.com/Saif-09/Spinning-Game",
    },
    
];

export { services, technologies, experiences, testimonials, projects };