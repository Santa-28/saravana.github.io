/* eslint-disable @next/next/no-img-element */
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles";
import { FiDownload } from 'react-icons/fi';
import Image from "next/image";

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title>
          <span>
            <FiDownload /> Download
          </span>
        </Title>

        <CVContent>
          <CVDescription>
            <div className="aspas">&ldquo;</div>
            <p>
              Here you can download my professional resume by clicking on the download button.
            </p>
            <div className="profile">
              <Image src="/skprofile.jpg" alt="Profile Image" width={65} height={60} />
              <div className="name">
                <h3>Saravanakumar</h3>
                <span>Developer | Programmer | Freelancer</span>
              </div>
            </div>
          </CVDescription>
          
          <Curriculum>
            <img src="/cv.png" alt="Resume" />
            <a href="/pdf/Saravanakumar.pdf" download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20} />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>
      </CVContainer>
    </Container>
  );
}
