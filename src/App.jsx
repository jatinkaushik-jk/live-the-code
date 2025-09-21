import React from 'react';
import Navigation from './components/NavigationSection';
import HeroSection from './components/HeroSection';
import Timeline from './components/TimelineSection';
import Themes from './components/ThemesSection';
import Sponsors from './components/SponsorsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <Timeline />
        <Themes />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;