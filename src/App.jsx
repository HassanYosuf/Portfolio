import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhoAmI } from './components/WhoAmI';
import { WhatMovesMe } from './components/WhatMovesMe';
import { Projects } from './components/Projects';
import { RightNow } from './components/RightNow';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { DotBackground } from './components/DotBackground';
import { CustomCursor } from './components/CustomCursor';
import { Experience } from './components/Experience';
import { portfolioData } from './data/portfolio';

export default function App() {
  return (
    <>
      <CustomCursor />
      <DotBackground />
      <div className="overflow-x-hidden" style={{ position: 'relative', zIndex: 1 }}>
      <Navigation />
      <Hero />
      <WhoAmI skills={portfolioData.skills} />
      <WhatMovesMe data={portfolioData.whatMovesMe} />
      <Projects projects={portfolioData.projects} />
      <Experience experience={portfolioData.experience} />
      <RightNow data={portfolioData.rightNow} />
      <Blog articles={portfolioData.articles} />
      <Footer contact={portfolioData.contact} />
      </div>
    </>
  );
}
