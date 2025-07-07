// pages/experience.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Container, Title, Button } from '../styles/styles'; // Adjust if styles are elsewhere
import { ExperienceContainer, ExperienceContent } from '../components/Experience/styles'; // Adjust this path
import { Books } from 'phosphor-react';
import experience from '../data/experiences';

const ExperiencePage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Title>
        Experience
        <span>
          <Books /> Internship
        </span>
      </Title>

      <VerticalTimeline lineColor={theme.firstColor}>
        {experience.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            contentStyle={{
              background: theme.backgroundAlt,
              borderBottom: `7px solid ${theme.backgroundAlt}`,
              boxShadow: `0px 5px 0px 0px ${theme.firstColor}`,
              padding: '1.5rem'
            }}
            contentArrowStyle={{
              borderRight: `10px solid ${theme.backgroundAlt}`
            }}
            date={exp.date}
            icon={
              <Image
                style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '60%' }}
                width={60}
                height={60}
                src={exp.img}
                alt={exp.title.en}
                loading="lazy"
              />
            }
            iconStyle={{
              boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
              background: theme.backgroundAlt,
              color: theme.firstColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ExperienceContainer>
              <ExperienceContent>
                <h1>{exp.title.en}</h1>
                <span>{exp.office.en}</span>
                <p>
                  {(exp.description?.en || 'No description available.')
                    .split('\n')
                    .map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                </p>

                <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                  <h3>Techs:</h3>
                  <div className="tag">
                    {exp.tags.map((tag) => (
                      <Image
                        key={tag.name}
                        width={40}
                        height={40}
                        src={tag.icon}
                        alt={tag.name}
                        style={{ margin: '0.2rem' }}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </ExperienceContent>
            </ExperienceContainer>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default ExperiencePage;
