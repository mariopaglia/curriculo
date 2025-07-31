import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import styled from './styles.module.scss';

/**
 * Contact section component
 * @returns {JSX.Element} Contact component
 */
export const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: 'Localização',
      value: 'Valinhos, São Paulo, Brasil',
      link: null,
    },
    {
      icon: <FaPhoneAlt />,
      label: 'Telefone',
      value: '(11) 94841-3923',
      link: 'https://wa.me/5511948413923',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'contato@mariopaglia.dev.br',
      link: 'mailto:contato@mariopaglia.dev.br',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/devmariopaglia',
      link: 'https://www.linkedin.com/in/devmariopaglia/',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/mariopaglia',
      link: 'https://github.com/mariopaglia',
    },
    {
      icon: <SiLinktree />,
      label: 'Linktree',
      value: 'linktr.ee/devmariopaglia',
      link: 'https://linktr.ee/devmariopaglia',
    },
  ];

  const handleContactClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id='contact' className={styled.contact}>
      <div className={styled.container}>
        <div className={styled.header}>
          <h2 className={styled.title}>Entre em Contato</h2>
          <p className={styled.subtitle}>Vamos conversar sobre oportunidades de colaboração</p>
        </div>

        <div className={styled.content}>
          <div className={styled.infoSection}>
            <h3>Informações de Contato</h3>
            <p>
              Estou sempre aberto a novas oportunidades, conexões no campo da tecnologia e projetos freelance. Se você
              está em busca de um profissional apaixonado, dedicado e com habilidades comprovadas para seu projeto, não
              hesite em entrar em contato.
            </p>

            <div className={styled.contactGrid}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`${styled.contactCard} ${info.link ? styled.clickable : ''}`}
                  onClick={() => handleContactClick(info.link)}
                >
                  <div className={styled.contactIcon}>{info.icon}</div>
                  <div className={styled.contactDetails}>
                    <span className={styled.contactLabel}>{info.label}</span>
                    <span className={styled.contactValue}>{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styled.ctaSection}>
            <div className={styled.ctaCard}>
              <h3>Vamos Trabalhar Juntos?</h3>
              <p>
                Se você está procurando por um desenvolvedor front-end experiente para seu projeto ou precisa de
                consultoria técnica, estou aqui para ajudar. Vamos transformar suas ideias em realidade!
              </p>
              <div className={styled.ctaActions}>
                <button
                  className={styled.ctaButton}
                  onClick={() => handleContactClick('mailto:contato@mariopaglia.dev.br')}
                >
                  Enviar Mensagem
                </button>
                <button
                  className={styled.ctaButtonSecondary}
                  onClick={() => handleContactClick('https://wa.me/5511948413923')}
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
