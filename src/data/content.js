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
  body: 'People everywhere use them to do remarkable things: filling dance floors, starting scenes, teaching classrooms, or making their very first track.',
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
    heading: 'Making music isn’t always easy. The highs and lows are what make it worth it.',
    body: 'It comes naturally to some, it’s hard for most, and it means something to everyone who sticks with it. Working here can feel the same way: the flow, the breakthroughs, the sense of building something bigger than ourselves. That’s what we love about the work, and what we hope to give back to the people who make music with our tools.',
  },
  {
    type: 'video',
    caption: 'Why we work here: a short film',
    href: 'https://www.youtube.com/watch?v=9SbnhgjeyXA',
    image: { ...px(8132546, 1334, 750), alt: '' },
  },
  {
    type: 'text',
    flush: true,
    heading: 'Founded in 1999 by the people who still run it today.',
    body: 'We’ve grown to more than 350 people building instruments, software and learning tools. Our rhythms have changed over the years, but one thing hasn’t: we’re in it for the long run. We want to make products people can rely on for years of creative work, and to support them along the way.',
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
    heading: 'Everyone has something unique to contribute.',
    body: 'We’re artists and engineers, designers and educators, researchers and producers from more than 30 countries. The best results come from teams that can look at a problem from more than one angle. There’s still a long way to go, and we’re committed to building an inclusive music-making culture from the inside out.',
  },
  {
    type: 'wide',
    image: { ...px(5676679, 2400, 1600), alt: 'Two colleagues working side by side at a shared desk' },
  },
  {
    type: 'text',
    flush: true,
    heading: 'We help our people grow.',
    body: 'Everyone gets the resources to do their best work and keep developing. Alongside internal and external training, we offer long-term mentoring and coaching, plus regular salons on development, design and music where people share new techniques and ideas.',
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
    heading: 'We want people to love it here, and we’ll make moving to join us as easy as we can.',
    body: 'We help with relocation and paperwork where it applies, and new colleagues in Berlin get free German classes. You can expect comprehensive health insurance for you and your family, generous parental leave, and company-wide events and team get-togethers throughout the year.',
  },
];

export const cta = {
  heading: 'There’s much more to come. Join us.',
  body: 'We’re proud of what we’ve built so far. If you’d like to help build what’s next, we’d love to hear from you.',
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
