import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Hero, TextBlock, Split, VideoPod, Wide, Cta } from './components/Sections.jsx';
import { hero, intro, sections, cta } from './data/content.js';

const blocks = {
  text: TextBlock,
  split: Split,
  video: VideoPod,
  wide: Wide,
};

export default function App() {
  return (
    <>
      <a href="#site-content" className="skip-link">Skip to main content</a>
      <a href="#site-footer" className="skip-link">Skip to footer</a>
      <Header />
      <main id="site-content" tabIndex={-1}>
        <Hero {...hero} />
        <TextBlock {...intro} intro />
        {sections.map(({ type, ...props }, i) => {
          const Block = blocks[type];
          return <Block key={i} {...props} />;
        })}
        <Cta {...cta} />
      </main>
      <Footer />
    </>
  );
}
