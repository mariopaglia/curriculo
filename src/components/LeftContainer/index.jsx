import React from 'react';
import styled from './styles.module.scss';

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaBehanceSquare,
  FaHandshake,
  FaPhoneAlt,
} from 'react-icons/fa';
import { Chip } from '@mui/material';
import { DiHtml5, DiJavascript, DiReact, DiSass, DiGitBranch } from 'react-icons/di';
import {
  SiTypescript,
  SiNextdotjs,
  SiJest,
  SiCypress,
  SiTestinglibrary,
  SiAmazonaws,
  SiTerraform,
  SiStyledcomponents,
  SiJenkins,
} from 'react-icons/si';

export function LeftContainer() {
  const technicalSkillsList = [
    { label: 'HTML', icon: <DiHtml5 /> },
    { label: 'CSS/SASS', icon: <DiSass /> },
    { label: 'Styled Components', icon: <SiStyledcomponents /> },
    { label: 'JavaScript', icon: <DiJavascript /> },
    { label: 'ReactJS', icon: <DiReact /> },
    { label: 'NextJS', icon: <SiNextdotjs /> },
    { label: 'TypeScript', icon: <SiTypescript /> },
    { label: 'Git/GitHub', icon: <DiGitBranch /> },
    { label: 'Jest', icon: <SiJest /> },
    { label: 'Cypress', icon: <SiCypress /> },
    { label: 'Testing Library', icon: <SiTestinglibrary /> },
    { label: 'AWS', icon: <SiAmazonaws /> },
    { label: 'Terraform', icon: <SiTerraform /> },
    { label: 'CI/CD', icon: <SiJenkins /> },
  ];

  const interpersonalSkillsList = [
    'Comunicação',
    'Escrita',
    'Empatia',
    'Colaboração',
    'Organização',
    'Flexibilidade',
    'Resiliência',
    'Liderança',
    'Ética',
    'Proatividade',
  ];

  const certificationsList = [
    { course: 'HTML, CSS e Javascript', institution: 'Impacta' },
    { course: 'React Completo', institution: 'Origamid' },
    { course: 'ReactJS', institution: 'Rocketseat' },
    { course: 'NextJS', institution: 'Rocketseat' },
    { course: 'JavaScript', institution: 'Origamid' },
    { course: 'SASS', institution: 'Rocketseat' },
    { course: 'JamStack', institution: 'Rocketseat' },
    { course: 'Git e Github', institution: 'Udemy' },
    { course: 'Bootstrap', institution: 'Udemy' },
    { course: 'jQuery', institution: 'Udemy' },
    { course: 'Desenvolvimento Web', institution: 'Udemy' },
    { course: 'PHP', institution: 'Udemy' },
    { course: 'MYSQL', institution: 'Udemy' },
    { course: 'Google Adwords', institution: 'Goobec' },
    { course: 'Liderança e Gestão de Pessoas', institution: 'SKY Brasil' },
  ];

  return (
    <section className={styled.leftContainer}>
      <h3>Contato</h3>
      <br />

      <div className={styled.contact}>
        <p>
          <FaMapMarkerAlt /> Jundiaí, São Paulo, Brasil
        </p>
        <p>
          <FaPhoneAlt />{' '}
          <a href='https://wa.me/5511948413923' target='_blank' rel='noreferrer'>
            (11) 94841-3923
          </a>
        </p>
        <p>
          <FaEnvelope />{' '}
          <a href='mailto:contato@mariopaglia.dev.br' target='_blank' rel='noreferrer'>
            contato@mariopaglia.dev.br
          </a>
        </p>
        <p>
          <FaLinkedin />{' '}
          <a href='https://linkedin.com/in/mariopagliadev' target='_blank' rel='noreferrer'>
            linkedin.com/in/mariopagliadev
          </a>
        </p>
        <p>
          <FaGithub />{' '}
          <a href='https://github.com/mariopaglia' target='_blank' rel='noreferrer'>
            github.com/mariopaglia
          </a>
        </p>
        <p>
          <FaBehanceSquare />{' '}
          <a href='https://www.behance.net/mariopaglia' target='_blank' rel='noreferrer'>
            behance.net/mariopaglia
          </a>
        </p>
      </div>

      <br />

      <h3>Competências técnicas</h3>
      <br />
      <div className={styled.skills}>
        {technicalSkillsList.map((skill, index) => (
          <Chip key={index} icon={skill.icon} color='primary' label={skill.label} variant='outlined' />
        ))}
      </div>
      <br />

      <h3>Competências interpessoais</h3>
      <br />
      <div className={styled.skills}>
        {interpersonalSkillsList.map((skill, index) => (
          <Chip key={index} icon={<FaHandshake />} color='primary' label={skill} variant='outlined' />
        ))}
      </div>
      <br />

      <h3>Certificações</h3>
      <br />

      {
        <div className={styled.certification}>
          {certificationsList.map((certification, index) => (
            <div key={index}>
              <span>{certification.course}</span>
              <p>{certification.institution}</p>
            </div>
          ))}
        </div>
      }
    </section>
  );
}
