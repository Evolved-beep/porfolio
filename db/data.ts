import { Briefcase, File,Code, Mail } from "lucide-react";

const data = {
    sidebar:[
        {
            icon: File,
            url:"/",
            name:'Home'
        }, 
        {
            icon: Briefcase,
            url:"/project",
            name:'Project'
        }, 
        {
            icon:File,
            url:"/about",
            name:'About'
        }, 
        {
            icon: Mail,
            url:"/contact",
            name:"Contact"
        }, 
        {
            icon: Code,
            url:"/skills",
            name:'Code'
        }, 
        
        
    ], 

    bartabs: [
        {
            name:'home.tsx',
            slug:'home',
            image:'/assets/images/ts.png',
            url:'/'
        },
        {
            name:'project.js',
            slug:'project',
            image:'/assets/images/js.png',
            url:'/project'
        },
        {
            name:'about.html',
            slug:'about',
            image:'/assets/images/html.png',
            url:'/about'
        },
        {
            name:'contact.css',
            slug:'contact',
            image:'/assets/images/css.png',
            url:'/contact'
        },
        {
            name:'skills.json',
            slug:'skills',
            image:'/assets/images/json.png',
            url:'/skills'
        }
    ],

    skills: [{
        name:'Front-end',
        stack:["/assets/images/html.png", "/assets/images/css.png", "/assets/images/js.png","/assets/images/ts.png", "/assets/images/react.png", "/assets/images/tailwind.png", "/assets/images/next.png"]
    },{
        name:'Back-end',
        stack:["/assets/images/js.png", "/assets/images/ts.png","/assets/images/next.png", "/assets/images/node.png", "/assets/images/express.png", "/assets/images/mongo.png", "/assets/images/prisma.png", "/assets/images/postgre.png"]

    },{
        name:'DevOps',
        stack:["/assets/images/github.png","/assets/images/vercel.png"]
    },{
        name:"Software",
        stack:["/assets/images/vsc.png"]
    }],

    projet:[{
        title:"Vault",
        techno:["JS","CSS","HTML"],
        description:'Expense tracker made with Js vanilla, CSS and HTML',
        code:"https://github.com/Evolved-beep/Vault",
        prod:"https://vault-kappa-nine.vercel.app/"
    },
    {
        title:"Estately",
        techno:["NextJS","TypeScript","Tailwind"],
        description:"Modern real estate platform with advanced search filters and property listings",
        code:"https://github.com/Evolved-beep/estately",
        prod:"https://estately-kappa.vercel.app/"
    },
   ,{
        title:"BodyGym",
        techno:["NextJS","TypeScript","Tailwind"],
        description:"A one single page made with Nextjs and Typescript",
        code:"https://github.com/Evolved-beep/BodyGym",
        prod:"https://body-gym.vercel.app/"
    },{
        title:"T1 Hub",
        techno:["NextJS","TypeScript","Tailwind","Charts"],
        description:"Esports analytics dashboard for T1's League of Legends competitive performance",
        code:"https://github.com/Evolved-beep/t1-hub",
    },
    {
        title:"RiftGG",
        techno:["NextJS","TypeScript","Tailwind","Riot API"],
        description:"League of Legends statistics platform with real-time player data and match history",
        code:"https://github.com/Evolved-beep/riftgg",
        prod:"https://rift-gg.vercel.app/"
    },
    {
        title:"Portfolio",
        techno:["NextJS","TypeScript","Tailwind"],
        description:"My actual porfolio made with NextJs and Typescript",
        code:"https://github.com/Evolved-beep/porfolio",
        prod:"https://porfolio-theta-fawn.vercel.app/"
    }],

    socials:[{
        social:"Linkdin",
        name:'Maxime Magnier',
        link:"https://www.linkedin.com/in/maxime-magnier-760a15157/"
    },{
        social:"GitHub", 
        name:'Evolved-Beep',
        link:"https://github.com/Evolved-Beep"
    },{
        social:"Mail",
        name:"maxime.magnier@outlook.com",
        link:"mailto:maxime.magnier@outlook.com"
    }],

   about:[
  {
    year: "2019-2020",
    description: "Learned the basics of coding (HTML, CSS, JS, PHP, SQL). Graduated from AFPA.",
    location: "AFPA, Amiens",
    admitted: true
  },
  {
    year: "2020-2021",
    description: "Took a break due to lack of motivation and difficulty progressing.",
    location: "—",
    admitted: false
  },
  {
    year: "2021-2022",
    description: "Resumed coding self-taught with the goal of joining OpenClassRoom.",
    location: "Self-learning",
    admitted: false
  },
  {
    year: "2022-2023",
    description: "Deepened React and JS skills through OpenClassRoom, graduated remotely.",
    location: "Remote (OpenClassRoom)",
    admitted: true
  },
  {
    year: "2023-present",
    description: "Continued self-learning with TypeScript, Next.js, and other modern technologies.",
    location: "Self-learning",
    admitted: false
  }]
}

export default data