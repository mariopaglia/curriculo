import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import styled from './styles.module.scss';

/**
 * Hero section component with modern design
 * @returns {JSX.Element} Hero component
 */
export const Hero = () => {
  const handleContactClick = (type) => {
    switch (type) {
      case 'email':
        window.open('mailto:contato@mariopaglia.dev.br', '_blank');
        break;
      case 'phone':
        window.open('https://wa.me/5511948413923', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/devmariopaglia/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/mariopaglia', '_blank');
        break;
      case 'linktree':
        window.open('https://linktr.ee/devmariopaglia', '_blank');
        break;
      default:
        break;
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home' className={styled.hero}>
      <div className={styled.container}>
        <div className={styled.content}>
          <div className={styled.textContent}>
            <h1 className={styled.title}>
              Olá, eu sou <span className={styled.highlight}>Mario Paglia</span>
            </h1>
            <h2 className={styled.subtitle}>Desenvolvedor Front-end & Consultor</h2>
            <p className={styled.description}>
              Com mais de 12 anos de experiência em desenvolvimento web, especializo-me em criar interfaces modernas e
              intuitivas utilizando React, Next.js e TypeScript. Ofereço serviços de desenvolvimento e consultoria
              técnica.
            </p>

            <div className={styled.actions}>
              <button className={styled.btnPrimary} onClick={() => scrollToSection('contact')}>
                Entre em Contato
              </button>
              <button className={styled.btnSecondary} onClick={() => scrollToSection('services')}>
                Ver Serviços
              </button>
            </div>
          </div>

          <div className={styled.socialLinks}>
            <button
              onClick={() => handleContactClick('linkedin')}
              className={styled.socialButton}
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </button>
            <button onClick={() => handleContactClick('github')} className={styled.socialButton} aria-label='GitHub'>
              <FaGithub />
            </button>
            <button onClick={() => handleContactClick('email')} className={styled.socialButton} aria-label='Email'>
              <FaEnvelope />
            </button>
            <button onClick={() => handleContactClick('phone')} className={styled.socialButton} aria-label='Phone'>
              <FaPhoneAlt />
            </button>
            <button
              onClick={() => handleContactClick('linktree')}
              className={styled.socialButton}
              aria-label='Linktree'
            >
              <SiLinktree />
            </button>
          </div>
        </div>

        <div className={styled.scrollIndicator}>
          <div className={styled.scrollText}>Role para baixo</div>
          <div className={styled.scrollArrow}></div>
        </div>
      </div>
    </section>
  );
};
