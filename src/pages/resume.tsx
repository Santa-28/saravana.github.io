import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollTop } from '../components/ScrollTop';
import { CV } from '../components/CV';
import { Description, Section, Title } from '../styles/styles';
import styled from 'styled-components';
import { BsFileText } from 'react-icons/bs';

const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;

  iframe {
    width: 100%;
    max-width: 850px;
    height: 100vh;
    border: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;

export default function Resume() {
  const pdfURL = '/pdf/Saravanakumar.pdf'; // ✔️ Your PDF file path from public folder

  return (
    <>
      <Head>
        <title>Resume | Saravanakumar</title>
        <meta
          name="description"
          content="This is my updated resume. You can view or download it here."
        />
        <meta property="og:title" content="Resume | Saravanakumar" />
        <meta
          property="og:description"
          content="This is my updated resume. You can view or download it here."
        />
      </Head>

      <ScrollTop />

      <Section>
        <Title>
          <p>../curriculum</p>
          Curriculum Vitae
          <span>
            <BsFileText /> Resume
          </span>
        </Title>

        <Description style={{ textAlign: 'center', marginBottom: '2rem' }}>
          This is my updated resume, embedded below as a PDF. You can view it here or download it using the button.
        </Description>

        <PageSection>
          <iframe
            src={pdfURL}
            title="Saravanakumar Resume PDF"
          />

          <CV />
        </PageSection>
      </Section>

      <Footer />
    </>
  );
}
