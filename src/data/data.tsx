import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Anamika Rajendran',
  description: "Turning curiosity into secure, human-friendly tech — researcher, developer, and aspiring PhD.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Achievements: 'achievements',
  Projects: 'Projects'
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hey, I'm Anamika!`,
  description: (
    <>
      <p className="prose-sm italic text-stone-200 sm:prose-base lg:prose-lg">
        Curious about people, privacy, and how tech can actually help? So am I!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Exploring ideas as a <strong className="text-stone-100">researcher</strong>, building solutions as a <strong className="text-stone-100">full-stack developer</strong>. I love building thoughtful, secure, and human-friendly systems.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I’m currently working on how <strong className="text-stone-100">refugees experience surveillance and privacy</strong>, and designing an <strong className="text-stone-100">AI-powered keyboard</strong> to help AAC users type faster with less effort.
        Previously, I built and studied{' '}<strong className="text-stone-100">
        deniable encrypted messaging (
        <a
          href="https://dl.acm.org/doi/10.1145/3688459.3688479"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-stone-400"
        >
          EuroUSEC 2024
        </a>
        )
        </strong>, analyzed <strong className="text-stone-100">smart grid cyber threats</strong>, and developed web platforms in industry.
      </p>
      <p className="prose-sm italic text-stone-200 sm:prose-base lg:prose-lg">
        Future <strong className="text-stone-100">PhD in the making</strong>, always eager to collaborate and get hands-on with projects that make a difference — approachable and ready to roll up my sleeves!
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/AnamikaR_PhD_Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      I’m a PhD-in-progress researcher and full-stack developer passionate about cybersecurity and human-centered tech.
      When I’m not working, you’ll find me painting, cooking food while listening to{' '}
      <a
        href="https://open.spotify.com/album/5Tgbt7iKQhbeDf7olg9UBz?si=ooFawrwrSS2r9jM0F2npLg"
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-100 inline-flex items-center gap-1 hover:text-stone-400"
      >
        Kishore Kumar songs <MusicalNoteIcon className="w-4 h-4 text-white" />
      </a>
      , or simply traveling.
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Las Cruces, NM', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Painting, Cooking, Travel, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'New Mexico State University (PhD Candidate)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Researcher', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'AI & Language Technologies',
    skills: [
      { name: 'ChatGPT APIs / OpenAI SDK', level: 8 },
      { name: 'Whisper (Speech-to-Text)', level: 7 },
    ],
  },
  {
    name: 'Research & Tools',
    skills: [
      { name: 'LaTeX', level: 9 },
      { name: 'NVivo', level: 7 },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 9 },
      { name: 'TypeScript', level: 9 },
      { name: 'Jasmine', level: 7 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Python', level: 9 },
      { name: 'Spring Boot', level: 8 },
      { name: 'Node.js', level: 8 },
    ],
  },
  {
    name: 'Databases & APIs',
    skills: [
      { name: 'MongoDB', level: 8 },
      { name: 'MySQL', level: 8 },
      { name: 'REST APIs', level: 7 },
    ],
  },
  {
    name: 'DevOps & Deployment',
    skills: [
      { name: 'Git / GitHub', level: 9 },
      { name: 'Docker', level: 7 },
      { name: 'Kubernetes', level: 6 },
    ],
  },
  {
    name: 'Spoken Languages',
    skills: [
      { name: 'English', level: 10 },
      { name: 'Hindi', level: 10 },
      { name: 'Spanish', level: 3 },
    ],
  },
  {
    name: 'Professional & Communication Skills',
    skills: [
      { name: 'Research Design', level: 9},
      { name: 'Presentation & Visualization', level: 9 },
      { name: 'Public Speaking', level: 7 },
    ],
  }
];


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Desert Glow Hour',
    image: porfolioImage1,
    hoverText: 'Golden Hour',
    description: 'Caught a glowing Las Cruces sunset during a grocery run. Grocery-store sky? Is that even a thing?',
  },
  {
    title: 'Skies Full of Dreams',
    image: porfolioImage2,
    hoverText: 'Up, Up, and ABQ!',
    description: 'Colorful chaos at the Hot-Air Balloon Festival in Albuquerque.',
  },
  {
    title: 'Molten Horizon',
    image: porfolioImage3,
    hoverText: 'Burning Skies',
    description: 'Las Cruces sky painted in fire and peace.',
  },
  {
    title: 'Colorful Corners of Copenhagen',
    image: porfolioImage4,
    hoverText: 'Postcard Vibes',
    description: 'Charming, cozy, and oh-so-Danish — the iconic Nyhavn houses.',
  },
  {
    title: 'Neon Pulse',
    image: porfolioImage5,
    hoverText: 'City That Never Sleeps',
    description: 'New York lights dancing through the night.',
  },
  {
    title: 'Sun-Kissed Tomatoes',
    image: porfolioImage6,
    hoverText: 'Nature’s Simplicity',
    description: 'Fresh Swedish tomatoes soaking in a golden glow.',
  },
  {
    title: 'Where Sky Meets Sea',
    image: porfolioImage7,
    hoverText: 'Serenity in Cancún',
    description: 'Blues, greens, and white waves — nature’s soft lullaby.',
  },
  {
    title: 'Edge of Earth',
    image: porfolioImage8,
    hoverText: 'End of the Map',
    description: 'A view that dares your eyes to blink — endless Cancún blues.',
  },
  {
    title: 'Blooming Pause',
    image: porfolioImage9,
    hoverText: 'Petal Break',
    description: 'NMSU campus blessed with cherry blossom-like pinks.',
  },
  {
    title: 'Milestone Moment',
    image: porfolioImage11,
    hoverText: '🎓 That’s Me!',
    description: 'Wrapped in joy, tassel turned — my master’s graduation day. Yaay!',
  },
  {
    title: 'Daisy Flower',
    image: porfolioImage10,
    hoverText: 'Simple Beauty',
    description: 'Bright daisies painting the wild with innocence and grace.',
  },
  {
    title: 'Peacock',
    image: porfolioImage12,
    hoverText: 'Vibrant Grace',
    description: 'When you own your colors, the world notices.',
  }
  
];



/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'In Progress',
    location: 'New Mexico State University',
    title: 'PhD Candidate in Computer Science',
    gpa: "GPA - 4.0",
    content: (
      <p>
        Researching refugee perspectives on privacy and surveillance, and designing AI-powered AAC keyboards to enhance communication efficiency for AAC users.
      </p>
    ),
  },
  {
    date: '2024',
    location: 'New Mexico State University',
    title: 'Master of Science in Computer Science',
    gpa: "GPA - 3.9",
    content: (
      <>
        <p>
          Focused on cybersecurity and human-computer interaction. Completed research on deniable encrypted messaging and its usability. 
        </p>
        <p>
          <span className="italic">Wanna check out the paper?</span>{' '}
          <a
            href="https://dl.acm.org/doi/10.1145/3688459.3688479"
            target="_blank"
            rel="noopener noreferrer"
            className="italic text-black underline dark:text-black-100"
          >
            It's right here!
          </a>
        </p>
      </>
    ),
  },
  {
    date: '2018',
    location: 'LBS Institute of Technology for Women, Kerala',
    title: 'Bachelor of Technology in Computer Science',
    gpa: "CGPA - 9.0",
    content: (
      <>
        <p>
          Studied Computer Engineering and was top scholar in my department. Worked on my first research project on placement training using machine learning and published the work.
        </p>
        <p>
          <span className="italic">Curious to peek at my first paper?</span>{' '}
          <a
            href="https://www.ijert.org/research/placement-training-using-machine-learning-IJERTV8IS060716.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="italic text-black underline dark:text-black-100"
          >
            Grab it here!
          </a>
        </p>
      </>
    ),
  },
];



export const experience: TimelineItem[] = [
  {
    date: '2019 – 2022',
    location: 'Infosys (Client: FedEx, Europe)',
    title: 'Full Stack Developer',
    gpa: "",
    content: (
      <p>
        Led a team of 4 UI developers to deliver a logistics web app for FedEx, boosting customer satisfaction by 30%. Developed a fast, responsive front end with <strong>Angular</strong> and optimized the back end using <strong>Spring Boot</strong>. Improved load time by 5 seconds and maintained 95% code reliability with <strong>Jasmine</strong>. Streamlined deployment with <strong>Jenkins</strong> and followed Agile workflows throughout.
      </p>
    ),
  },
  {
    date: '2017 – 2018',
    location: 'CDAC, India',
    title: 'Machine Learning Intern',
    gpa: "",
    content: (
      <p>
        Built a placement training app powered by a <strong>Weka-based</strong> machine learning model trained on 1,000+ questions. Improved student interview performance by 20% through real-time feedback and model tuning. Published the project in an international conference.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I’m always open to collaboration, questions, or just a friendly hello. Feel free to reach out via any of the options below!',
  items: [
    {
      type: ContactType.Email,
      text: 'arajen97@nmsu.edu',
      href: 'mailto:arajen97@nmsu.edu',
    },
    {
      type: ContactType.Location,
      text: 'Las Cruces, New Mexico, USA',
      href: 'https://www.google.com/maps/place/Las+Cruces,+NM,+USA',
    },
    {
      type: ContactType.LinkedIn,
      text: 'anamika-rajendran',
      href: 'https://www.linkedin.com/in/anamika-rajendran',
    },
    {
      type: ContactType.Github,
      text: 'AnamikaRajendran',
      href: 'https://github.com/AnamikaRajendran',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/AnamikaRajendran'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anamika-rajendran'},
];
