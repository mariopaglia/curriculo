import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { EDUCATION } from '../../data/education';
import styled from './styles.module.scss';

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
