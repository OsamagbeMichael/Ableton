// All page content lives here, so the components stay presentational.
// Photos: Pexels (free license), hot-linked and cropped through Pexels' CDN.

const px = (id, w, h) => {
  const base = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
  return { src: `${base}&dpr=1`, srcSet: `${base}&dpr=1 1x, ${base}&dpr=2 2x`, width: w, height: h };
};

export const mainNav = ['Live', 'Push', 'Move', 'Note', 'Link', 'Shop', 'Packs', 'Help'].map((label) => ({
  label,
  href: '#',
}));

export const subNav = [
  { label: 'About', href: '#', current: true },
  { label: 'Jobs', href: '#' },
  { label: 'Apprenticeships', href: '#' },
];

export const moreMenu = {
  site: {
    heading: 'More on Ableton.com:',
    links: ['Blog', 'Ableton for the Classroom', 'Ableton for Colleges and Universities', 'Certified Training', 'About Ableton', 'Jobs', 'Apprenticeships'],
  },
  apps: {
    heading: 'More from Ableton:',
    items: [
      { title: 'Ableton Learn', text: 'Beginner-friendly lessons and sounds from working artists.' },
      { title: 'Learning Music', text: 'The fundamentals of music making, right in your browser.' },
      { title: 'Learning Synths', text: 'A playable web synth with lessons on how synthesis works.' },
      { title: 'Making Music', text: 'Ideas for getting unstuck, from a book of creative strategies.' },
    ],
  },
};

export const hero = {
  title: 'Ableton',
  subtitle: 'Software, hardware and lessons for making music. Berlin, since 1999.',
  image: { ...px(7088370, 1600, 1036), alt: 'A musician playing a keyboard in a sunlit studio full of gear' },
};

export const intro = {
  heading: 'We make software, hardware and learning platforms for music creation and performance.',
  body: 'People use them to fill dance floors and teach classes. Plenty of them are finishing their first track.',
};

export const sections = [
  {
    type: 'split',
    tone: 'purple',
    layout: 'a',
    images: [
      { ...px(27007088, 1200, 1200), alt: 'A musician working a synthesizer and drum machine' },
      { ...px(39190489, 1000, 750), alt: 'A small team talking around a desk in a bright office' },
    ],
  },
  {
    type: 'text',
    heading: 'Making music is hard. That’s part of why people keep at it.',
    body: 'A few people find it easy. Most of us get stuck for weeks, then hear the part that works. Building the tools feels the same, and we try to put that payoff into what you use.',
  },
  {
    type: 'video',
    caption: 'Why we work here: a short film',
    href: 'https://www.youtube.com/watch?v=9SbnhgjeyXA',
    image: { ...px(8132546, 1334, 750), alt: '' },
  },
  {
    type: 'text',
    spacing: 'flush',
    heading: 'Founded in 1999 by the people who still run it today.',
    body: 'More than 350 of us now build the instruments, software and lessons. How we work has changed since 1999. What we aim for hasn’t. We want you to rely on a product for years and get support for as long as you use it.',
  },
  {
    type: 'split',
    tone: 'blue',
    layout: 'b',
    images: [
      { ...px(7495549, 1200, 900), alt: 'Colleagues brainstorming with sticky notes on a glass wall' },
      { ...px(11044740, 1000, 667), alt: 'A MIDI keyboard in front of a computer running music software' },
    ],
  },
  {
    type: 'text',
    heading: 'Teams work better when they don’t all think alike.',
    body: 'We come from more than 30 countries. Our teams mix artists with engineers and educators with researchers, because a mixed team catches problems one viewpoint misses. We still have work to do on inclusion, and we start inside the company.',
  },
  {
    type: 'wide',
    image: { ...px(5676679, 2400, 1600), alt: 'Two colleagues working side by side at a shared desk' },
  },
  {
    type: 'text',
    spacing: 'flush',
    heading: 'We help our people grow.',
    body: 'You get time for internal and external training, and a mentor or coach who stays with you for the long term. At our regular salons, colleagues show each other new techniques in development, design and music.',
  },
  {
    type: 'split',
    tone: 'green',
    layout: 'c',
    images: [
      { ...px(8117420, 1000, 667), alt: 'A team planning a project together at a table' },
      { ...px(10933686, 1200, 1200), alt: 'A piano and a computer set up in a home studio' },
    ],
  },
  {
    type: 'text',
    heading: 'Moving countries for a job is hard. We do most of the paperwork.',
    body: 'We handle relocation and paperwork where we can. If you join us in Berlin, German classes are free. Health insurance covers your family too, parental leave is part of the package, and the whole company gets together a few times a year.',
  },
];

export const cta = {
  heading: 'There’s much more to come. Join us.',
  body: 'If you want to help build what comes next, start with the open roles.',
  link: { label: 'See Job Openings', href: '#' },
  image: { ...px(27007092, 1224, 1224), alt: 'A hand on a music production controller' },
};

export const footer = {
  quick: ['Register Live, Push or Move', 'About Ableton', 'Jobs'],
  social: ['Facebook', 'X', 'YouTube', 'Instagram', 'TikTok', 'Discord'],
  education: ['Offers for students and teachers', 'Ableton for the Classroom', 'Ableton for Colleges and Universities'],
  community: ['Find Ableton User Groups', 'Find Certified Training', 'Become a Certified Trainer'],
  languages: ['English', 'Deutsch', 'Français', '日本語', '简体中文', 'Español'],
  regions: ['Canada', 'United States', 'United Kingdom', 'Germany', 'France', 'Japan', 'Australia'],
  legal: ['Contact Us', 'Press Resources', 'Legal Info', 'Corporate Information', 'Privacy Policy', 'Cookie Settings', 'Imprint'],
};
