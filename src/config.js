module.exports = {
  siteTitle: 'Shreyas S K | Machine Learning Engineer',
  siteDescription:
    'Shreyas S K holds a Masters degree in Civil Engineering from IIT Guwahati',
  siteKeywords:
    'Shreyas S K, Shreyas, SK, shreyassk, data scientist, AI/ML developer, machine learning engineer, generative ai specialist',
  siteUrl: 'https://shreyassks.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shreyas S K',
  location: 'Basavanagudi, Bangalore',
  email: 'skshreyas714@gmail.com',
  github: 'https://github.com/shreyassks',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shreyassks',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shreyas-s-k/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ecstatic.human',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#D76E00',
    navy: '#f2ead3',
    darkNavy: '#ece1bf',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
