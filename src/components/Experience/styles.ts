import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundAlt};
`;

export const ExperienceContent = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.firstColor};
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => props.theme.secondColor};
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
    text-align: justify;
    color: ${(props) => props.theme.textSecondary};
  }

  p {
    margin-top: 1.3rem;
    font-size: 1rem;
    text-align: justify;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme.hover};
  }

  .tag {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    img {
      width: 2rem;
      height: 2rem;
    }
  }
  } `;

