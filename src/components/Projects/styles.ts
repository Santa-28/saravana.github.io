import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  align-items: center;
  transition: transform 0.3s ease;
  overflow: hidden;
  margin: 1rem;
  border: 2px solid ${props => props.theme.border};
  max-width: 100%;
  aspect-ratio: 16 / 9;
  background-color: ${props => props.theme.backgroundAlt};
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(5deg);
    border-color: ${props => props.theme.firstColor};
    border-radius: 12px;
  }

  .image-wrapper {
    width: 50;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .title {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0));
    color: white;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    h2 {
      font-size: 1.4rem;
      font-weight: bold;
      color: ${props => props.theme.firstColor};
    }

    span {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #fff;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  &:hover .title {
    opacity: 1;
  }
`;

export const TagButton = styled.button<{ selected: boolean }>`
  background: ${props => props.theme.secondColor};
  color: ${props => props.theme.text};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
  transform: ${props => (props.selected ? 'scale(1.1)' : 'none')};
  box-shadow: ${props => (props.selected ? '0 0 10px rgba(0,0,0,0.5)' : 'none')};

  &:hover {
    background: ${props => props.theme.secondColor};
  }

  ${props =>
    props.selected &&
    `
    background: ${props.theme.firstColor};
    color: black;
  `}

  @media (min-width: 768px) {
    margin-right: 1rem;
  }

  @media (min-width: 1200px) {
    margin-right: 1.5rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
