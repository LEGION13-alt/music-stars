import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Teacher from './components/Teacher/Teacher';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Teacher />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
