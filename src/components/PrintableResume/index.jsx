import React from 'react';
import { EDUCATION } from '../../data/education';
import { EXPERIENCES } from '../../data/experiences';
import { PROFILE } from '../../data/profile';
import { SKILL_GROUPS } from '../../data/skills';
import { experiencePeriod } from '../utils/helpers';
import styled from './styles.module.scss';

const SITE_URL = 'mariopaglia.dev.br';

// Hidden on screen. Printed by the "Baixar currículo (PDF)" button as a one-page,
// single-column, plain-text layout that ATS parsers read reliably.
export const PrintableResume = () => {
  const contactLinks = [
    { text: PROFILE.phone, href: PROFILE.whatsappUrl },
    { text: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { text: 'linkedin.com/in/devmariopaglia', href: PROFILE.linkedinUrl },
    { text: 'github.com/mariopaglia', href: PROFILE.githubUrl },
    { text: SITE_URL, href: `https://${SITE_URL}/` },
  ];

  return (
    <div className={styled.resume}>
      <header className={styled.header}>
        <p className={styled.name}>{PROFILE.name}</p>
        <p className={styled.headline}>{PROFILE.role} | Tech Lead | Node.js, NestJS, TypeScript, React/Next.js, AWS</p>
        <p className={styled.contact}>
          {PROFILE.location}
          {contactLinks.map((link) => (
            <React.Fragment key={link.text}>
              {' | '}
              <a href={link.href}>{link.text}</a>
            </React.Fragment>
          ))}
        </p>
      </header>

      <section>
        <h2>Resumo</h2>
        <p>
          Engenheiro de Software Sênior com mais de 15 anos de experiência, atualmente referência técnica de squad na
          CI&T. Especialista em microsserviços com Node.js, NestJS e AWS, APIs REST e GraphQL e front-end com React e
          Next.js. Experiência em mentoria, code review, definição de padrões de arquitetura e liderança de times com
          mais de 30 pessoas. Busco atuar como Tech Lead.
        </p>
      </section>

      <section>
        <h2>Experiência profissional</h2>
        {EXPERIENCES.map((experience) => (
          <article key={`${experience.company}-${experience.startDate}`} className={styled.job}>
            <div className={styled.jobHeader}>
              <h3>
                {experience.position} | {experience.company}
              </h3>
              <span>{experiencePeriod(experience.startDate, experience.endDate)}</span>
            </div>
            {experience.resumeHighlights.length > 0 && (
              <ul>
                {experience.resumeHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <section>
        <h2>Competências</h2>
        <ul className={styled.plainList}>
          {SKILL_GROUPS.map((group) => (
            <li key={group.title}>
              <strong>{group.title}:</strong> {group.skills.map((skill) => skill.name).join(', ')}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Formação</h2>
        <ul className={styled.plainList}>
          {EDUCATION.map((item) => (
            <li key={item.course}>
              <strong>{item.course}</strong>, {item.institution} · {item.period}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
