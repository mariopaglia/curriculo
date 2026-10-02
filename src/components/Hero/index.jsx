import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { PROFILE } from '../../data/profile';
import styled from './styles.module.scss';

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: PROFILE.linkedinUrl, icon: <FaLinkedin /> },
  { label: 'GitHub', href: PROFILE.githubUrl, icon: <FaGithub /> },
  { label: 'E-mail', href: `mailto:${PROFILE.email}`, icon: <FaEnvelope /> },
  { label: 'WhatsApp', href: PROFILE.whatsappUrl, icon: <FaWhatsapp /> },
];

export const Hero = () => {
  return (
    <section id='home' className={styled.hero}>
      <div className={styled.container}>
        <div className={styled.content}>
          <div className={styled.textContent}>
            <span className={styled.badge}>Aberto a vagas de Tech Lead</span>
            <h1 className={styled.title}>
              Olá, eu sou <span className={styled.highlight}>{PROFILE.name}</span>
            </h1>
            <p className={styled.subtitle}>
              {PROFILE.role} na {PROFILE.company}
            </p>
            <p className={styled.description}>
              Mais de 15 anos construindo software, hoje como referência técnica de squad. Projeto microsserviços
              escaláveis com Node.js, NestJS e AWS, desenvolvo interfaces com React e Next.js e ajudo times a crescer
              com mentoria, code review e padrões de arquitetura.
            </p>

            <div className={styled.actions}>
              <a className={styled.btnPrimary} href='#experience'>
                Ver experiência
              </a>
              <button type='button' className={styled.btnSecondary} onClick={() => window.print()}>
                Baixar currículo (PDF)
              </button>
            </div>
          </div>

          <ul className={styled.socialLinks}>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styled.socialButton}
                  aria-label={link.label}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a href='#about' className={styled.scrollIndicator} aria-label='Ir para a seção Sobre'>
        <span className={styled.scrollText}>Role para baixo</span>
        <span className={styled.scrollArrow} />
      </a>
    </section>
  );
};
