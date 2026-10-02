import React from 'react';
import { EXPERIENCES } from '../../data/experiences';
import { experiencePeriod } from '../utils/helpers';
import styled from './styles.module.scss';

export const Experience = () => {
  return (
    <section id='experience' className={styled.experience}>
      <div className={styled.container}>
        <div className={styled.header}>
          <h2 className={styled.title}>Experiência profissional</h2>
          <p className={styled.subtitle}>Da liderança de times à liderança técnica de squads</p>
        </div>

        <ol className={styled.timeline}>
          {EXPERIENCES.map((experience) => (
            <li key={`${experience.company}-${experience.startDate}`} className={styled.timelineItem}>
              <div className={styled.timelineMarker} />
              <article className={styled.timelineContent}>
                <header className={styled.companyHeader}>
                  <h3 className={styled.companyName}>{experience.company}</h3>
                  <p className={styled.position}>{experience.position}</p>
                </header>

                <div className={styled.meta}>
                  <span className={styled.period}>{experiencePeriod(experience.startDate, experience.endDate)}</span>
                  <span className={styled.location}>{experience.location}</span>
                </div>

                <p className={styled.summary}>{experience.summary}</p>

                {experience.highlights.length > 0 && (
                  <ul className={styled.highlights}>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}

                <ul className={styled.technologies} aria-label='Tecnologias'>
                  {experience.technologies.map((technology) => (
                    <li key={technology} className={styled.techTag}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
