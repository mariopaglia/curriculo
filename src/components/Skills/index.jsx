import React from 'react';
import { FaCheckCircle, FaCloud, FaDesktop, FaServer, FaUsers } from 'react-icons/fa';
import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiCypress,
  SiDatadog,
  SiDocker,
  SiGithubactions,
  SiGraphql,
  SiJest,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiServerless,
  SiTerraform,
  SiTestinglibrary,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';
import styled from './styles.module.scss';

const SKILL_GROUPS = [
  {
    title: 'Back-end e arquitetura',
    icon: <FaServer />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'NestJS', icon: <SiNestjs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
      { name: 'RabbitMQ', icon: <SiRabbitmq /> },
      { name: 'Prisma', icon: <SiPrisma /> },
      { name: 'Microsserviços' },
      { name: 'Arquitetura hexagonal' },
      { name: 'Event-driven' },
    ],
  },
  {
    title: 'Dados',
    icon: <SiPostgresql />,
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'DynamoDB', icon: <SiAmazondynamodb /> },
    ],
  },
  {
    title: 'Cloud e DevOps',
    icon: <FaCloud />,
    skills: [
      { name: 'AWS (ECS, Lambda, RDS)', icon: <SiAmazonaws /> },
      { name: 'Serverless', icon: <SiServerless /> },
      { name: 'Terraform', icon: <SiTerraform /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'GitHub Actions', icon: <SiGithubactions /> },
      { name: 'Datadog / New Relic', icon: <SiDatadog /> },
    ],
  },
  {
    title: 'Front-end',
    icon: <FaDesktop />,
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Module Federation', icon: <SiWebpack /> },
      { name: 'SSR / SSG' },
      { name: 'Web Vitals' },
    ],
  },
  {
    title: 'Qualidade',
    icon: <FaCheckCircle />,
    skills: [
      { name: 'Jest', icon: <SiJest /> },
      { name: 'Cypress', icon: <SiCypress /> },
      { name: 'Testing Library', icon: <SiTestinglibrary /> },
      { name: 'TDD' },
      { name: 'Clean Code' },
      { name: 'SOLID' },
    ],
  },
  {
    title: 'Liderança técnica',
    icon: <FaUsers />,
    skills: [
      { name: 'Mentoria e 1:1s' },
      { name: 'Code review' },
      { name: 'Padrões de arquitetura' },
      { name: 'Alinhamento com produto' },
      { name: 'Scrum / Kanban' },
    ],
  },
];

export const Skills = () => {
  return (
    <section id='skills' className={styled.skills}>
      <div className={styled.container}>
        <div className={styled.header}>
          <h2 className={styled.title}>Competências</h2>
          <p className={styled.subtitle}>As ferramentas e práticas que uso no dia a dia</p>
        </div>

        <div className={styled.groups}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className={styled.groupCard}>
              <h3 className={styled.groupTitle}>
                <span className={styled.groupIcon}>{group.icon}</span>
                {group.title}
              </h3>
              <ul className={styled.skillList}>
                {group.skills.map((skill) => (
                  <li key={skill.name} className={styled.skillTag}>
                    {skill.icon}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
