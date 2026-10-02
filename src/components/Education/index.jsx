import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import styled from './styles.module.scss';

const EDUCATION = [
  {
    institution: 'Full Cycle',
    course: 'Pós-graduação em Arquitetura de Software e Microsserviços',
    period: 'set. de 2024 – set. de 2026',
  },
  {
    institution: 'UNINTER',
    course: 'Tecnólogo em Gestão da Segurança e Defesa Cibernética',
    period: 'mar. de 2025 – mar. de 2027 (em andamento)',
  },
  {
    institution: 'Impacta Tecnologia',
    course: 'Tecnólogo em Engenharia de Software',
    period: 'jan. de 2007 – dez. de 2009',
  },
  {
    institution: 'Rocketseat',
    course: 'Formação em Desenvolvimento Full Stack',
    period: 'jan. de 2020 – dez. de 2024',
  },
  {
    institution: 'Origamid',
    course: 'Formação em Desenvolvimento Front-end',
    period: 'jan. de 2012 – dez. de 2020',
  },
];

export const Education = () => {
  return (
    <section id='education' className={styled.education}>
      <div className={styled.container}>
        <div className={styled.header}>
          <h2 className={styled.title}>Formação</h2>
          <p className={styled.subtitle}>Estudo contínuo em arquitetura, segurança e desenvolvimento</p>
        </div>

        <ul className={styled.grid}>
          {EDUCATION.map((item) => (
            <li key={item.course} className={styled.card}>
              <span className={styled.icon}>
                <FaGraduationCap />
              </span>
              <div>
                <h3 className={styled.course}>{item.course}</h3>
                <p className={styled.institution}>{item.institution}</p>
                <p className={styled.period}>{item.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
