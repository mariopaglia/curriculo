import React from 'react';
import { experiencePeriod } from '../utils/helpers';
import styled from './styles.module.scss';

/**
 * Experience section component
 * @returns {JSX.Element} Experience component
 */
export const Experience = () => {
  const experiences = [
    {
      company: 'Consorciei',
      position: 'Desenvolvedor Front-end',
      period: experiencePeriod('07/03/2022', ''),
      location: 'Jundiaí, São Paulo, Brasil',
      description: [
        'Como Desenvolvedor Front-end na Consorciei, meu papel vai além do desenvolvimento - é também uma questão de liderança e entrega de excelência. Dedico-me ao desenvolvimento de sistemas sofisticados que atendem às necessidades dos nossos principais parceiros, como Itaú, Santander e Porto Seguro.',
        'Com um foco incansável na qualidade, garanto a entrega eficaz de projetos dentro do prazo, utilizando tecnologias avançadas para otimizar sistemas internos e externos de gestão de compras, vendas e transferências de cotas de consórcio.',
        'Minha abordagem de desenvolvimento é embasada em uma variedade de ferramentas modernas como ReactJS, NextJS, Styled Components, Context API, Hooks, TypeScript, Axios, AWS Lambda, Terraform, Backend for Frontend (BFF), Jest, Cypress e Testing Library. Com elas, sou capaz de criar soluções escaláveis, altamente desempenháveis e com interfaces de usuário eficientes e intuitivas.',
        'Com a liderança da equipe como parte integral da minha função, conduzo a equipe com um equilíbrio eficaz entre orientação, autonomia e uma visão estratégica clara.',
      ],
      technologies: [
        'ReactJS',
        'NextJS',
        'TypeScript',
        'Styled Components',
        'AWS Lambda',
        'Terraform',
        'Jest',
        'Cypress',
      ],
    },
    {
      company: 'Agência H1 Code',
      position: 'Desenvolvedor Front-end',
      period: experiencePeriod('09/01/2016', '01/03/2022'),
      location: 'Jundiaí, São Paulo, Brasil',
      description: [
        'No papel de Desenvolvedor Front-end na Agência H1 Code, conduzi o desenvolvimento e a manutenção de uma variedade de projetos web, que abrangiam desde sites e lojas virtuais até blogs, landing pages e dashboards.',
        'Em minha atuação, empreguei uma ampla gama de tecnologias para garantir soluções robustas e de alta qualidade. Entre elas, HTML, CSS, SASS, JavaScript, Git, GitHub, Bootstrap, jQuery, ReactJS, NextJS, TypeScript, Redux e Styled Components.',
        'Para otimizar a comunicação entre front-end e back-end, apliquei minha experiência com o Axios, realizando requisições HTTP e integrando eficientemente nossas soluções com APIs externas. Essas habilidades se mostraram essenciais para criar interfaces de usuário intuitivas e para assegurar a máxima funcionalidade de nossas soluções web.',
        'Nesta posição, não só aprimorei minhas habilidades técnicas, mas também aprendi a adaptar-me rapidamente a novos desafios, sempre buscando a excelência em cada projeto que me foi confiado.',
      ],
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript', 'ReactJS', 'NextJS', 'TypeScript', 'Redux', 'Bootstrap'],
    },
    {
      company: 'SKY Brasil',
      position: 'Líder de Equipe',
      period: experiencePeriod('01/01/2014', '08/01/2016'),
      location: 'São Paulo, São Paulo, Brasil',
      description: [
        'Como Líder de Equipe na SKY Brasil, assumi responsabilidades de gestão e liderança, coordenando uma equipe interna de controladores. Sob minha orientação, planejamos estratégias para alcançar metas e prazos rigorosos, melhorando a eficiência e a produtividade da equipe.',
        'Além disso, liderei o processo de recrutamento e seleção para fortalecer ainda mais nossa equipe. Representei nossa unidade em eventos, reuniões e treinamentos externos, reforçando a imagem positiva e profissional da nossa equipe e da empresa como um todo.',
      ],
      technologies: ['Liderança', 'Gestão de Pessoas', 'Recrutamento', 'Treinamento'],
    },
    {
      company: 'SKY Brasil',
      position: 'Controlador Técnico',
      period: experiencePeriod('01/01/2008', '01/01/2014'),
      location: 'São Paulo, São Paulo, Brasil',
      description: [
        'Como Controlador Técnico, gerenciei e supervisionei uma equipe de mais de 30 técnicos responsáveis pela instalação e assistência técnica dos produtos SKY em residências. Além disso, proporcionava um atendimento ao cliente excepcional, agendando visitas técnicas para montagem e instalação de equipamentos.',
        'Esta experiência me proporcionou habilidades valiosas em liderança de equipe, gerenciamento de projetos, atendimento ao cliente e comunicação efetiva, competências que se provaram inestimáveis em minha carreira subsequente como desenvolvedor.',
      ],
      technologies: ['Supervisão', 'Atendimento ao Cliente', 'Gestão de Equipe'],
    },
  ];

  return (
    <section id='experience' className={styled.experience}>
      <div className={styled.container}>
        <div className={styled.header}>
          <h2 className={styled.title}>Experiência Profissional</h2>
          <p className={styled.subtitle}>Minha jornada profissional em desenvolvimento e liderança</p>
        </div>

        <div className={styled.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styled.timelineItem}>
              <div className={styled.timelineMarker}></div>
              <div className={styled.timelineContent}>
                <div className={styled.companyHeader}>
                  <h3 className={styled.companyName}>{exp.company}</h3>
                  <span className={styled.position}>{exp.position}</span>
                </div>

                <div className={styled.meta}>
                  <span className={styled.period}>{exp.period}</span>
                  <span className={styled.location}>{exp.location}</span>
                </div>

                <div className={styled.description}>
                  {exp.description.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>

                <div className={styled.technologies}>
                  {exp.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className={styled.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
