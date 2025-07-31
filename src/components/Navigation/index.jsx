import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from './styles.module.scss';

/**
 * Navigation component with responsive menu
 * @returns {JSX.Element} Navigation component
 */
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Serviços' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <nav className={`${styled.navigation} ${isScrolled ? styled.scrolled : ''}`}>
      <div className={styled.container}>
        <div className={styled.logo}>
          <a href='#home' onClick={() => handleNavClick('home')}>
            Mario Paglia
          </a>
        </div>

        <div className={`${styled.menu} ${isMenuOpen ? styled.active : ''}`}>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => handleNavClick(item.id)} className={styled.navLink}>
              {item.label}
            </a>
          ))}
        </div>

        <button className={styled.menuToggle} onClick={handleMenuToggle} aria-label='Toggle menu'>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};
