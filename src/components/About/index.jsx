import React from 'react';
import { FaCode, FaHeart, FaRocket, FaUsers } from 'react-icons/fa';
import styled from './styles.module.scss';

/**
 * About section component
 * @returns {JSX.Element} About component
 */
export const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: 'Full-stack',
      description:
        'Especialista em React, Next.js, Node.js e TypeScript. Desenvolvo soluções completas do backend ao frontend.',
    },
    {
      icon: <FaUsers />,
      title: 'Liderança',
      description: 'Experiência em conduzir equipes com equilíbrio entre orientação e autonomia.',
    },
    {
      icon: <FaRocket />,
      title: 'Inovação',
      description: 'Sempre atualizado com as últimas tecnologias e tendências do mercado.',
    },
    {
      icon: <FaHeart />,
      title: 'Paixão',
      description: 'Apaixonado por programação desde os 13 anos, sempre em busca de aprendizado.',
    },
  ];

  return (
    <section id='about' className={styled.about}>
      <div className={styled.container}>
        <div className={styled.header}>
          <h2 className={styled.title}>Sobre Mim</h2>
          <p className={styled.subtitle}>
            Desenvolvedor Full-stack apaixonado por criar soluções digitais completas e excepcionais
          </p>
        </div>

        <div className={styled.content}>
          <div className={styled.textSection}>
            <div className={styled.story}>
              <h3>Minha Jornada</h3>
              <p>
                Desde que descobri minha paixão por programação aos 13 anos, segui um caminho de aprendizado e
                aperfeiçoamento contínuos. Com o primeiro contato com HTML, CSS e Javascript em 2007 na Impacta
                Tecnologia, a chama foi acesa - e tem crescido desde então.
              </p>
              <p>
                Com mais de 12 anos de experiência como Desenvolvedor Full-stack, atualmente trabalho na CI&T, uma das
                maiores consultorias de tecnologia do Brasil. Tenho o prazer de criar soluções completas - do backend ao
                frontend - que entregam valor real para o negócio. Essa paixão é alimentada pelo meu compromisso em
                permanecer na vanguarda das tendências tecnológicas, aprimorando constantemente minhas habilidades e
                conhecimentos.
              </p>
              <p>
                Além da minha paixão por desenvolvimento, tenho uma afeição particular por liderar e orientar equipes
                para alcançar seus melhores resultados. Acredito firmemente que os melhores resultados são alcançados
                através da sinergia do trabalho em equipe e da liderança eficaz.
              </p>
            </div>
          </div>

          <div className={styled.highlights}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styled.highlightCard}>
                <div className={styled.iconWrapper}>{highlight.icon}</div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
