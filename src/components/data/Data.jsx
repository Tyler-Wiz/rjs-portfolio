import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import * as VscIcons from 'react-icons/vsc'


export const aboutMe = [
    { meta: "first name", metaInfo: "Natalie" },
    { meta: "last name", metaInfo: "Williams" },
    { meta: "Age", metaInfo: "27 Years" },
    { meta: "Nationality", metaInfo: "British" },
    { meta: "Freelance", metaInfo: "Available" },
    { meta: "Address", metaInfo: "Cambridge, UK" },
    { meta: "phone", metaInfo: "+44980183019" },
    { meta: "Email", metaInfo: "you@mail.com" },
    { meta: "Skype", metaInfo: " natalie.williams" },
    { meta: "langages", metaInfo: "Russian, English" },  
]

export const Avatar = {
    img:'./Img/Avatar.png'
}


export const BlogData = [
    {
        title:'Peloton accuses rivals of copying remote-workout tech',
        imgUrl:'./Img/Fitness.jpg',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto praesentium facere. In est eaque quo nihil qui eius odit reiciendis quam explicabo, et asperiores eligendi, facilis beatae illum natus.',
    },
    {
        title:'The most promising deep tech startups of Cambridge in 2021',
        imgUrl:'./Img/Cambridge.jpg',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto praesentium facere. In est eaque quo nihil qui eius odit reiciendis quam explicabo, et asperiores eligendi, facilis beatae illum natus.',
    },
    {
        title:'This family built a high-tech pod for their backyard',
        imgUrl:'./Img/Family.jpg',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto praesentium facere. In est eaque quo nihil qui eius odit reiciendis quam explicabo, et asperiores eligendi, facilis beatae illum natus.',
    },
]

export const EducationData = [
    {
        year:'2012',
        school:'Northern State University',
        degree:'Bsc Computer Engineering'
    },
    {
        year:'2016',
        school:'Cambridge University',
        degree:'Masters Computer Engineering'
    },
    {
        year:'2019',
        school:'Anglia Ruskin University',
        degree:'Masters Data Science'
    },

]

export const AchievementData = [
    {
        year:'2012',
        position:'Junior Developer',
        metaInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        year:'2016',
        position:'Front-End Developer',
        metaInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        year:'2019',
        position:'FullStack Developer',
        metaInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  
    },
]


export const NavData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
    },
    {
        title: 'About',
        path: '/about',
        icon: <BsIcons.BsPerson />, 
    },
    {
        title: 'Services',
        path: '/Services',
        icon: <FaIcons.FaUsersCog />,
    },
    {
        title: 'Projects',
        path: '/Projects',
        icon: <VscIcons.VscServerProcess />,
    },
    {
        title: 'Blog',
        path: '/Blog',
        icon: <BsIcons.BsNewspaper />,
    
    },
    {
        title: 'Contact',
        path: '/Contact',
        icon: <FaIcons.FaEnvelope />,
    }
]

export const hamburger = {
     menu:<FaIcons.FaHamburger/>,
     close:<FaIcons.FaWindowClose/>
}


export const PortfolioData = [
    {
        title:'Personal Website',
        category:['All', 'Front-End'],
        imgUrl:'./Img/Personal.jpg',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto praesentium facere. In est eaque quo nihil qui eius odit reiciendis quam explicabo, et asperiores eligendi, facilis beatae illum natus.',
    },
    {
        title:'Lifestyle Website',
        category:['All', 'React', 'Front-End' ],
        imgUrl:'./Img/lifestyle.jpg',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto praesentium facere. In est eaque quo nihil qui eius odit reiciendis quam explicabo, et asperiores eligendi, facilis beatae illum natus.',
    },
    {
        title:'Book launch Website',
        category:['All','Front-End'],
        imgUrl:'./Img/PychoWeb.jpg',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto praesentium facere. In est eaque quo nihil qui eius odit reiciendis quam explicabo, et asperiores eligendi, facilis beatae illum natus.',
    },
    {
        title:'Food Website',
        category:['All', 'React', 'Front-End'],
        imgUrl:'./Img/Food.jpg',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto praesentium facere. In est eaque quo nihil qui eius odit reiciendis quam explicabo, et asperiores eligendi, facilis beatae illum natus.',
    },
    {
        title:'Web Design Sample',
        category:['All', 'UX-UI'],
        imgUrl:'./Img/UXDesign.jpg',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto praesentium facere. In est eaque quo nihil qui eius odit reiciendis quam explicabo, et asperiores eligendi, facilis beatae illum natus.',
    },
    {
    
        title:'Product Design',
        category:['All','HTML', 'UX-UI'],
        imgUrl:'./Img/Product.jpg',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni architecto praesentium facere. In est eaque quo nihil qui eius odit reiciendis quam explicabo, et asperiores eligendi, facilis beatae illum natus.',
    }
]

export const SkillData  = [
    {name:'HTML', percentage:'78%',cName:'html'},
    {name:'PHP', percentage:'60%',cName:'php'},
    {name:'UI/UX Design', percentage:'75%',cName:'ux'},
    {name:'Vue', percentage:'90%',cName:'vue'},
    {name:'React', percentage:'75%',cName:'react'},
    {name:'Angular', percentage:'65%',cName:'angular'},
    {name:'CSS', percentage:'90%',cName:'css'},
    {name:'JQuery', percentage:'80%',cName:'jquery'}
]