import React from 'react';
import { FaChartLine, FaCode, FaCogs, FaMobile, FaRocket, FaShoppingCart } from 'react-icons/fa';
import styled from './styles.module.scss';

/**
 * Services section component
 * @returns {JSX.Element} Services component
 */
export const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Desenvolvimento Web',
      description: 'Sites institucionais, landing pages e aplicações web modernas com foco em performance e SEO.',
      technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
      features: ['Design responsivo', 'Otimização SEO', 'Performance', 'Acessibilidade'],
    },
    {
      icon: <FaMobile />,
      title: 'Aplicações Web',
      description: 'Sistemas web complexos, dashboards e aplicações empresariais com arquitetura escalável.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      features: ['Arquitetura escalável', 'API REST', 'Autenticação', 'Dashboard'],
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com integração de pagamentos e gestão de produtos.',
      technologies: ['Next.js', 'Stripe', 'CMS', 'E-commerce'],
      features: ['Carrinho de compras', 'Pagamentos', 'Gestão de produtos', 'Relatórios'],
    },
    {
      icon: <FaChartLine />,
      title: 'Dashboards',
      description: 'Painéis administrativos e dashboards interativos para análise de dados.',
      technologies: ['React', 'D3.js', 'Charts.js', 'Real-time'],
      features: ['Gráficos interativos', 'Dados em tempo real', 'Filtros avançados', 'Exportação'],
    },
    {
      icon: <FaCogs />,
      title: 'Sistemas Personalizados',
      description: 'Desenvolvimento de sistemas sob medida para necessidades específicas do seu negócio.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      features: ['Análise de requisitos', 'Arquitetura customizada', 'Integração de APIs', 'Deploy'],
    },
    {
      icon: <FaRocket />,
      title: 'Consultoria Técnica',
      description: 'Consultoria em arquitetura de software, otimização de código e melhores práticas.',
      technologies: ['Code Review', 'Arquitetura', 'Performance', 'Segurança'],
      features: ['Análise de código', 'Otimização', 'Documentação', 'Treinamento'],
    },
  ];

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='services' className={styled.services}>
      <div className={styled.container}>
        <div className={styled.header}>
          <h2 className={styled.title}>Serviços</h2>
          <p className={styled.subtitle}>Soluções completas em desenvolvimento web para impulsionar seu negócio</p>
        </div>

        <div className={styled.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styled.serviceCard}>
              <div className={styled.serviceIcon}>{service.icon}</div>
              <h3 className={styled.serviceTitle}>{service.title}</h3>
              <p className={styled.serviceDescription}>{service.description}</p>

              <div className={styled.technologies}>
                <h4>Tecnologias:</h4>
                <div className={styled.techTags}>
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styled.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styled.features}>
                <h4>Inclui:</h4>
                <ul className={styled.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styled.ctaSection}>
          <div className={styled.ctaContent}>
            <h3>Precisa de uma solução personalizada?</h3>
            <p>Vamos conversar sobre seu projeto e como posso ajudar a transformar suas ideias em realidade.</p>
            <button className={styled.ctaButton} onClick={handleContactClick}>
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
