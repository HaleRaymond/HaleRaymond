import {
  mobile,
  backend,
  creator,
  web,
  meta,
  firebase,
  flask,
  python,
  mobilelegend,
  moonton,
  VE,
  moonmana,
  unity,
  unreal,
  cryengine,
  godot,
  cocos,
  construct,
  threedmax,
  maya,
  daz3d,
  iclone,
  strategy,
  fight,
  unitycert,
  unitycertlogo,
  googlecert,
  googlelogo,
  IEEElogo,
  IEEE_cert,  
  awsball,
  az900,
  microsoft

} from "../assets";

export const about = "Highly skilled game developer with over 6 years of experience in the game industry and can produce perfect results for designing the game engine and strategy. I provide excellent services to bring your game concept to life from scratch enough experience in 3D video game development and create clearly attractive, high-quality games that catch gamers. Customization options are available to match your personal style and preferences. I have successfully shipped multiple strategic and RPG games and am proficient in implementing game mechanics, physics, and user experience design. Passionate about creating immersive gaming experiences that delight players."

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Design",
    icon: web,
  },
  {
    title: "Game Art",
    icon: mobile,
  },
  {
    title: "Game Development",
    icon: backend,
  },
  {
    title: "Online Game Server",
    icon: creator,
  },
  {
    title: "AR & VR",
    icon: meta,
  },
];

const technologies = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name:'Unreal',
    icon: unreal
  },
  {
    name:'Cry Engine',
    icon: cryengine
  },
  {
    name:'Godot',
    icon: godot
  },
  {
    name:'Cocos',
    icon: cocos
  },
  {
    name:'Construct 3',
    icon: construct
  },
  {
    name:'Autodesk 3Ds Max',
    icon: threedmax
  },
  {
    name:'Autodesk Maya',
    icon: maya
  },  
  {
    name:'Daz 3D',
    icon: daz3d
  },
  {
    name:'iClone',
    icon: iclone
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "aws",
    icon: awsball,
  },
];

const experiences = [
  {
    title: "Senior Game Developer",
    company_name: "Moonmana",
    icon: moonmana,
    iconBg: "#00bfa4",
    date: "August 2020 - March 2022",
    points: [
      "Developed and maintained multiple games using several game engine, ensuring they were user-friendly and met business needs",
      "Collaborated with cross-functional teams, including artists, designers, and QA testers, to ensure high-quality products were delivered on time and within budget",
      "Developed and maintained project documentation, including technical design documents and code documentation",
      "Integrated multiplayer functionality into a game project, enabling players to compete or cooperate in real-time across different devices, enhancing the social and interactive aspects of the game. Incorporated augmented reality technology into a game project, enabling users to overlay virtual objects onto real world",
      "Creating an interactive and immersive augmented reality experience.  Implemented cloud-based game backend using Google Cloud Platform, utilizing services like Firebase Realtime Database and Cloud Functions to enable features such as user authentication, cloud save, and in-app purchases",
      "Utilized Firebase in game development to implement real-time player synchronization, user authentication, and cloud storage for game save data, providing a seamless cross-platform experience and ensuring data integrity across Android and iOS devices"
    ],
  },
  {
    title: "Senior Game Developer",
    company_name: "Versus Evil LLC",
    icon: VE,
    iconBg: "#00bfa4",
    date: "August 2018 - March 2020",
    points: [
      "Developed and maintained 30+ games for Multi-platform using Unreal and Unity3D",
      "Implemented game mechanics, user interfaces, and monetization strategies to enhance player engagement and revenue resulting in a 10% increase in revenue",
      "Optimized game code using JavaScript and TypeScript to reduce load times by 30%, resulting in a 20% decrease in player drop-off rates and a 10% increase in daily active users",
      "Optimized website performance through efficient coding practices, caching techniques, and performance analysis I utilized my expertise to develop a realistic first-person shooter (FPS) game, implementing advanced shooting mechanics, dynamic environments, competitive multiplayer modes, and a robust progression system, delivering an intense and engaging FPS experience within the Roblox platform",
      "Leveraged the power of Godot to develop a procedurally generated, open- world survival game with extensive crafting systems, dynamic weather, and AI-driven ecosystems, showcasing my expertise in utilizing Godot's flexibility and scripting capabilities to create immersive and realistic gameplay experiences"
    ],
  },
  {
    title:"Middle Game Developer",
    company_name:"Moonton",
    icon: moonton,
    iconBg:"#FFF",
    date: "July 2016 - August 2018",
    points:[
      "Developed and designed  3D strategy games from concept to release using Unity and C#",
      "Created engaging a lot of gameplay mechanics, level designs, and puzzles to provide a challenging and enjoyable experience",
      "Implemented character controls, enemy AI, and physics-based interactions to enhance gameplay dynamics",
      "Collaborated with artists to create visually appealing sprites, animations, and particle effects",
      "Conducted playtesting sessions and gathered user feedback to iterate and improve game mechanics and difficulty balance",
      "Developed a 2D mobile game using Unity Engine, implementing gameplay mechanics, UI / UX features, and optimizing performance for Android and iOS platforms, resulting in an engaging and smooth gaming experience",
      "Integrated Google Play Games Services and Apple Game Center for multiplayer functionality, leaderboard tracking, and achievement systems, enhancing social interactions and competitiveness within the game"
    ]
  }
];

const certifications = [
  {
    name:
      "Certified Game Developer",
    image: unitycert,
    icon: unitycertlogo
  },
  {
    name:
      "Google Cloud Professional Machine Learning Engineer",
    image: googlecert,
    icon: googlelogo
  },
  {
    name:
    "Professional Software Engineer",
    image: IEEE_cert,
    icon: IEEElogo,
  },
  // {
  //   name:
  //     "Python Basics",
  //   image: pythoncert,
  //   icon: hackerrank,
  //   url: 'https://www.hackerrank.com/certificates/635cc0313ed6'
  // },
];

const projects = [
  {
    name: "Mobile Legend",
    description:
      "Bang Bang is a mobile multiplayer online battle arena game",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Multiplayer online battle arena",
        color: "green-text-gradient",
      },
      {
        name: "3D Game Art",
        color: "pink-text-gradient",
      },
    ],
    image: mobilelegend,
    source_code_link: "https://github.com/HaleRaymond/MLBB",
  },
  {
    name: "Fight Of Kingdoms",
    description:
      "Fight Of Kingdoms is a series of turn-based strategy 3D games.",
    tags: [
      {
        name: "Unreal",
        color: "blue-text-gradient",
      },
      {
        name: "Multyplayer game Design",
        color: "green-text-gradient",
      },
      {
        name: "Game Art",
        color: "pink-text-gradient",
      },
    ],
    image: strategy,
    source_code_link: "https://github.com/HaleRaymond/virtual-world",
  },
  {
    name: "Fight Of The Beauties",
    description:
      "A role-playing game where you can compete with other players or in-game characters based on your beauty and intelligence",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Daz 3D",
        color: "green-text-gradient",
      },
      {
        name: "Game VFX",
        color: "pink-text-gradient",
      },
    ],
    image: fight,
    source_code_link: "https://github.com/HaleRaymond/battleofbeauty",  
  },
];

export { services, technologies, experiences, certifications, projects };






