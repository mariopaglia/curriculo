import React from 'react';
import { SKILL_GROUPS } from '../../data/skills';
import styled from './styles.module.scss';

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
