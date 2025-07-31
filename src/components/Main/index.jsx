import React from 'react';
import { About } from '../About';
import { Contact } from '../Contact';
import { Experience } from '../Experience';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Navigation } from '../Navigation';
import { Services } from '../Services';
import { Skills } from '../Skills';

/**
 * Main component that renders all sections
 * @returns {JSX.Element} Main component
 */
export function Main() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
