import React from 'react';
import styled from './styles.module.scss';

const IMPACT_METRICS = [
  { value: '+15 anos', label: 'escrevendo código, de projetos autônomos a squads em grandes empresas' },
  { value: '500 mil', label: 'requisições por dia em microsserviços com 99,9% de uptime' },
  { value: '−20%', label: 'no custo de infraestrutura AWS e −60% no tempo de deploy' },
  { value: '30+', label: 'pessoas lideradas antes da carreira técnica, hoje mentoria de devs' },
];

export const About = () => {
  return (
    <section id='about' className={styled.about}>
      <div className={styled.container}>
        <div className={styled.header}>
          <h2 className={styled.title}>Sobre mim</h2>
          <p className={styled.subtitle}>Engenharia de software com visão de arquitetura e de pessoas</p>
        </div>

        <div className={styled.content}>
          <div className={styled.story}>
            <p>
              Sou Engenheiro de Software Sênior na CI&T, onde atuo como referência técnica do squad: defino padrões de
              arquitetura, conduzo code reviews, mentoro desenvolvedores e faço a ponte técnica com product managers e
              stakeholders.
            </p>
            <p>
              Meu foco é o back-end distribuído, com microsserviços em Node.js e NestJS, arquitetura hexagonal e
              orientada a eventos, APIs REST e GraphQL e infraestrutura na AWS. Também construo interfaces com React,
              Next.js e TypeScript, o que me permite entregar de ponta a ponta.
            </p>
            <p>
              Antes da programação virar profissão, liderei times de mais de 30 pessoas na SKY Brasil. Essa base em
              gestão é o que hoje aplico na condução técnica de squads, e é por isso que busco meu próximo passo como
              Tech Lead.
            </p>
          </div>

          <ul className={styled.metrics}>
            {IMPACT_METRICS.map((metric) => (
              <li key={metric.value} className={styled.metricCard}>
                <strong className={styled.metricValue}>{metric.value}</strong>
                <span className={styled.metricLabel}>{metric.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
