import styled from "styled-components"

export const SkillsContainer = styled.div`
  display: grid;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 420px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 468px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 994px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

`

export const SkillsContent = styled.div`
  width: 12rem;
  height: 10rem;

  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.border};

  h4 {
    z-index: 1;
    text-align: center;
  }

  img {
    z-index: 1;
    object-fit: contain;
  }

  .border {
    &::before{
      content: '';
      position: absolute;
      width: 5rem;
      height: 17rem;
      left: 4.5rem;
      top: -40%;
      background: ${(props) => props.color};
      animation: bar 6s linear 0s infinite normal none running;
      border-radius: 10px;
  
    @keyframes bar {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
    }

    ::after {
      content: '';
      position: absolute;
      inset: 5px;
      background: ${props => props.theme.backgroundAlt};
      border-radius: 20px;
    }
  }

`

export const Vector = styled.div`
  position: relative;
  z-index: -10;
  width: 90vw;
  top: -20vw;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }

  @media (min-width: 468px) {
    top: 1vw;
  }

  .js {
    position: absolute;
    right: 0vw;
  }

  .html {
    position: absolute;
    left: 0vw;
  }
`