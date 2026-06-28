import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { WhoAmI } from './components/WhoAmI';
import { WhatMovesMe } from './components/WhatMovesMe';
import { Projects } from './components/Projects';
import { RightNow } from './components/RightNow';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { Backdrop } from './components/Backdrop';
import { Experience } from './components/Experience';
import { CommandPalette } from './components/CommandPalette';
import { portfolioData } from './data/portfolio';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <>
      <Backdrop />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} contact={portfolioData.contact} />

      <div className="overflow-x-hidden relative z-[1]">
        <Navigation onOpenPalette={() => setPaletteOpen(true)} />

        <main>
          <Hero
            name={portfolioData.name}
            title={portfolioData.title}
            bio={portfolioData.shortBio}
            resume={portfolioData.contact.resume}
            onOpenPalette={() => setPaletteOpen(true)}
          />
          <Metrics metrics={portfolioData.metrics} />
          <Projects projects={portfolioData.projects} />
          <Experience experience={portfolioData.experience} />
          <WhoAmI skills={portfolioData.skills} />
          <RightNow data={portfolioData.rightNow} />
          <WhatMovesMe data={portfolioData.whatMovesMe} />
          <Blog articles={portfolioData.articles} />
        </main>

        <Footer contact={portfolioData.contact} />
      </div>
    </>
  );
}
