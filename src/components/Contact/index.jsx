import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import { PROFILE } from '../../data/profile';
import styled from './styles.module.scss';

const CONTACT_INFO = [
  { icon: <FaMapMarkerAlt />, label: 'Localização', value: PROFILE.location },
  { icon: <FaWhatsapp />, label: 'WhatsApp', value: PROFILE.phone, href: PROFILE.whatsappUrl },
  { icon: <FaEnvelope />, label: 'E-mail', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/devmariopaglia', href: PROFILE.linkedinUrl },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/mariopaglia', href: PROFILE.githubUrl },
  { icon: <SiLinktree />, label: 'Linktree', value: 'linktr.ee/devmariopaglia', href: PROFILE.linktreeUrl },
];

export const Contact = () => {
  return (
    <section id='contact' className={styled.contact}>
      <div className={styled.container}>
        <div className={styled.header}>
          <h2 className={styled.title}>Vamos conversar</h2>
          <p className={styled.subtitle}>Aberto a oportunidades como Tech Lead e Engenheiro de Software Sênior</p>
        </div>

        <div className={styled.content}>
          <div className={styled.infoSection}>
            <p>
              Se você está montando ou evoluindo um time e precisa de alguém para liderar tecnicamente, desenhar a
              arquitetura e fazer as pessoas crescerem, vou gostar de conversar.
            </p>

            <ul className={styled.contactGrid}>
              {CONTACT_INFO.map((info) => {
                const cardContent = (
                  <>
                    <span className={styled.contactIcon}>{info.icon}</span>
                    <span className={styled.contactDetails}>
                      <span className={styled.contactLabel}>{info.label}</span>
                      <span className={styled.contactValue}>{info.value}</span>
                    </span>
                  </>
                );

                return (
                  <li key={info.label}>
                    {info.href ? (
                      <a className={styled.contactCard} href={info.href} target='_blank' rel='noopener noreferrer'>
                        {cardContent}
                      </a>
                    ) : (
                      <div className={styled.contactCard}>{cardContent}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styled.ctaCard}>
            <h3>Tem uma vaga em mente?</h3>
            <p>Me chame por e-mail ou pelo WhatsApp.</p>
            <div className={styled.ctaActions}>
              <a className={styled.ctaButton} href={`mailto:${PROFILE.email}`}>
                Enviar e-mail
              </a>
              <a
                className={styled.ctaButtonSecondary}
                href={PROFILE.whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
