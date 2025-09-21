import React from 'react';
import Navigation from './components/NavigationSection';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Timeline from './components/TimelineSection';
import Themes from './components/ThemesSection';
import Sponsors from './components/SponsorsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-black">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <AboutSection />
        <Timeline />
        <Themes />
        <Sponsors />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;