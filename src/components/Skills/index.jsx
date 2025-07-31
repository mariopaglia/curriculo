import React from 'react';
import { DiGitBranch, DiHtml5, DiJavascript, DiReact, DiSass } from 'react-icons/di';
import {
  FaCheckCircle,
  FaCode,
  FaGem,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import {
  SiAmazonaws,
  SiCypress,
  SiJest,
  SiNextdotjs,
  SiServerless,
  SiStyledcomponents,
  SiTerraform,
  SiTestinglibrary,
  SiTypescript,
} from 'react-icons/si';
import styled from './styles.module.scss';

/**
 * Skills section component
 * @returns {JSX.Element} Skills component
 */
export const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', icon: <DiHtml5 /> },
    { name: 'CSS/SASS', icon: <DiSass /> },
    { name: 'Styled Components', icon: <SiStyledcomponents /> },
    { name: 'JavaScript', icon: <DiJavascript /> },
    { name: 'ReactJS', icon: <DiReact /> },
    { name: 'NextJS', icon: <SiNextdotjs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Git/GitHub', icon: <DiGitBranch /> },
    { name: 'Jest', icon: <SiJest /> },
    { name: 'Cypress', icon: <SiCypress /> },
    { name: 'Testing Library', icon: <SiTestinglibrary /> },
    { name: 'AWS', icon: <SiAmazonaws /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'Serverless', icon: <SiServerless /> },
  ];

  const interpersonalSkills = [
    { name: 'Comunicação', icon: <FaUsers />, description: 'Comunicação clara e efetiva' },
    { name: 'Escrita', icon: <FaHandshake />, description: 'Documentação e comunicação escrita' },
    { name: 'Empatia', icon: <FaHeart />, description: 'Entendimento das necessidades do usuário' },
    { name: 'Colaboração', icon: <FaUsers />, description: 'Trabalho em equipe eficiente' },
    { name: 'Organização', icon: <FaCheckCircle />, description: 'Gestão de projetos e tempo' },
    { name: 'Flexibilidade', icon: <FaRocket />, description: 'Adaptação a mudanças' },
    { name: 'Resiliência', icon: <FaShieldAlt />, description: 'Superação de desafios' },
    { name: 'Liderança', icon: <FaStar />, description: 'Condução de equipes' },
    { name: 'Ética', icon: <FaGem />, description: 'Valores e princípios sólidos' },
    { name: 'Proatividade', icon: <FaLightbulb />, description: 'Iniciativa e inovação' },
  ];

  return (
    <section id='skills' className={styled.skills}>
      <div className={styled.container}>
        <div className={styled.header}>
          <h2 className={styled.title}>Competências</h2>
          <p className={styled.subtitle}>Minhas habilidades técnicas e interpessoais</p>
        </div>

        <div className={styled.content}>
          <div className={styled.section}>
            <h3 className={styled.sectionTitle}>
              <FaCode className={styled.sectionIcon} />
              Competências Técnicas
            </h3>
            <div className={styled.skillsGrid}>
              {technicalSkills.map((skill, index) => (
                <div key={index} className={styled.skillCard}>
                  <div className={styled.skillHeader}>
                    <div className={styled.skillIcon}>{skill.icon}</div>
                    <span className={styled.skillName}>{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styled.section}>
            <h3 className={styled.sectionTitle}>
              <FaUsers className={styled.sectionIcon} />
              Competências Interpessoais
            </h3>
            <div className={styled.interpersonalGrid}>
              {interpersonalSkills.map((skill, index) => (
                <div key={index} className={styled.interpersonalCard}>
                  <div className={styled.interpersonalIcon}>{skill.icon}</div>
                  <h4 className={styled.interpersonalName}>{skill.name}</h4>
                  <p className={styled.interpersonalDescription}>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
