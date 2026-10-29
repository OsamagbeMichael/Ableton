// break-ui worst-case fixtures: plausible values, every one seen on real sites.
// German labels (long compounds), Japanese, a broken image, one-item and empty lists.
const px = (id, w, h) => {
  const base = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
  return { src: `${base}&dpr=1`, srcSet: `${base}&dpr=1 1x`, width: w, height: h };
};

export default {
  mainNav: ['Live 12 Suite', 'Push 3 Standalone', 'Move', 'Note', 'Max for Live', 'Link', 'Shop', 'Packs', 'Hilfe & Kontakt'].map((label) => ({ label, href: '#' })),
  subNav: [
    { label: 'Über uns', href: '#', current: true },
    { label: 'Stellenangebote', href: '#' },
    { label: 'Ausbildungsplätze', href: '#' },
    { label: 'Unternehmensverantwortung', href: '#' },
  ],
  moreMenu: {
    site: {
      heading: 'Mehr auf Ableton.com:',
      links: ['Blog', 'Ableton für Schulen und Klassenzimmer', 'Ableton für Hochschulen und Universitäten', 'Zertifizierte Trainerinnen und Trainer', 'Über Ableton', 'Stellenangebote', 'Ausbildungsplätze', 'Presse', 'Barrierefreiheitserklärung', 'Nutzerforum'],
    },
    apps: {
      heading: 'Mehr von Ableton:',
      items: [{ title: 'Ableton Learn: Beatmaking für Einsteigerinnen und Einsteiger', text: 'Kurse mit Klängen von Künstlerinnen und Künstlern aus der ganzen Welt, Schritt für Schritt erklärt.' }],
    },
  },
  hero: {
    title: 'Ableton AG',
    subtitle: 'Musikproduktionssoftware, Hardware und Lernplattformen für Musikschaffende auf der ganzen Welt. Berlin, seit 1999.',
    image: { ...px(7088370, 1600, 1036), alt: '' },
  },
  intro: {
    heading: 'Wir entwickeln Software, Hardware und Lernplattformen für Musikproduktion und Liveauftritte.',
    body: 'ライブパフォーマンスから初めての曲づくりまで、世界中の人々が私たちのツールを使っています。',
  },
  sections: [
    { type: 'split', tone: 'purple', layout: 'a', images: [
      { ...px(27007088, 1200, 1200), alt: 'Synthesizer' },
      { src: 'https://images.pexels.com/photos/0/missing.jpeg?w=1000&h=750', srcSet: undefined, width: 1000, height: 750, alt: 'Team im Büro (Bild fehlt)' },
    ] },
    { type: 'text', heading: 'Musikproduktionssoftwareentwicklungsabteilung', body: 'Ein Wort ohne Leerzeichen, wie es im Deutschen vorkommt: Softwareentwicklungsingenieurinnenstelle.' },
    { type: 'video', caption: 'Warum wir hier arbeiten – ein Kurzfilm mit Untertiteln in Deutsch, Englisch, Französisch, Japanisch und Spanisch', href: 'https://www.youtube.com/watch?v=9SbnhgjeyXA', image: { ...px(8132546, 1334, 750), alt: '' } },
  ],
  cta: {
    heading: 'Bewirb dich jetzt.',
    body: 'Senden Sie Ihre Unterlagen an karriere.bewerbungen.musikproduktion@ableton-berlin-mitte.example',
    link: { label: 'Alle offenen Stellenangebote ansehen', href: '#' },
    image: { ...px(27007092, 1224, 1224), alt: 'Controller' },
  },
  footer: {
    quick: ['Live, Push oder Move registrieren'],
    social: ['Instagram'],
    education: [],
    community: ['Ableton-Nutzergruppen in deiner Nähe finden', 'Zertifizierte Trainerinnen und Trainer finden', 'Zertifizierte Trainerin oder zertifizierter Trainer werden'],
    languages: ['Deutsch', '日本語'],
    regions: ['Deutschland', 'Vereinigtes Königreich Großbritannien und Nordirland'],
    legal: ['Kontakt', 'Presse', 'Rechtliche Hinweise', 'Unternehmensangaben', 'Datenschutzerklärung', 'Cookie-Einstellungen', 'Impressum', 'Barrierefreiheit', 'Vertrag widerrufen', 'Allgemeine Geschäftsbedingungen'],
  },
};
