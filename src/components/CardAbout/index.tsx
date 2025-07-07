// import Image from 'next/image'
// import Link from 'next/link'
// import { Button, Container, ButtonAlternatives } from '../../styles/styles'
// import { AboutContainer } from './styles'
// import { ArrowRight, TelegramLogo } from 'phosphor-react'
// import { useTranslation } from 'react-i18next'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

// export function About() {

//   const router = useRouter();
//   const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

//   useEffect(() => {
//     const { locale } = router;
//     setCurrentLang(locale as 'en' | 'ta');
//   }, [router.locale]);

//   return (
//     <Container>
//       <AboutContainer>
//         <div className="AboutImg">
//           <Image
//             width={200}
//             height={200}
//             className="AboutImg"
//             src="/sk.jpg"
//             alt="Saravana's Image"
//             loading="lazy"
//           />
//         </div>

//         <div className="aboutContent">
//           <div className="aboutDescription">
//             <h2>{currentLang === 'ta' ? 'என்னைப் பற்றி சிறிது!!' : 'Little About Me!!'}</h2>
//             <li>
//               {currentLang === 'ta' ? 'வேலம்மாள் பொறியியல் கல்லூரியில் பட்டம் பெற்ற பெருமைமிக்க பட்டதாரி, அங்குதான் நான் மின்னணுவியல் மற்றும் தகவல் தொடர்பு பொறியியலில் இளங்கலைப் பட்டம் பெற்றேன், தொழில்நுட்பத்தில் வலுவான அடித்தளத்தை அமைத்தேன்.' : 'A proud graduate of Velammal Engineering College, where I earned my Bachelor\'s degree in Electronics and Communication Engineering and laid a strong foundation in tech.'}
//             </li>
//             <li>
//               {currentLang === 'ta' ? 'இப்போது, ​​நான் நிஜ உலக தொழில்நுட்ப நிலப்பரப்பில் ஆழமாக மூழ்கி, ஒரு தீவிர டெவலப்பர், ஆர்வமுள்ள தன்னார்வலர் மற்றும் தன்னம்பிக்கை கொண்ட பொதுப் பேச்சாளராக தொடர்ந்து வளர்ந்து வரும் ஒரு பணிபுரியும் நிபுணராக இருக்கிறேன். தாக்கத்தை ஏற்படுத்த புதுமையான யோசனைகள் மற்றும் புதிய வாய்ப்புகளை ஆராய்வதில் நான் எப்போதும் ஆர்வமாக உள்ளேன்.' : 'Now, I\'m a working professional diving deeper into the real-world tech landscape, continuing to grow as an avid developer, passionate volunteer, and confident public speaker. I\'m always up for exploring innovative ideas and new opportunities to make an impact.'}
//             </li>
//           </div>

//           <div className='aboutButton'>
//             <Link href={'/resume'}>
//               <Button>
//                 {currentLang === 'ta' ? 'சுயவிவரம்' : 'Resume'}
//                 <TelegramLogo
//                   style={{
//                     marginBottom: '-0.1rem',
//                     marginLeft: '0.2rem',
//                   }}
//                   size={16}
//                   weight="bold"
//                 />
//               </Button>
//             </Link>
//             <Link href={'/about'}>
//               <ButtonAlternatives>
//                 {currentLang === 'ta' ? 'மேலும் வாசிக்க' : 'Read more'}
//                 <ArrowRight
//                   style={{
//                     marginBottom: '-0.1rem',
//                     marginLeft: '0.2rem'
//                   }}
//                   weight="bold"
//                   size={16}
//                 />
//               </ButtonAlternatives>
//             </Link>
//           </div>
//         </div>
//       </AboutContainer>
//     </Container>
//   );
// }

import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={150}
            height={100}
            className="AboutImg"
            src="/sk.jpg"
            alt="Saravana's Image"
            loading="lazy"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Little About Me!!</h2>
            <li>
              A proud graduate of Einstein College Of Engineering , where I earned my Bachelor's degree in Compute Science and Engineering and laid a strong foundation in tech.
            </li>
            <li>
              Now I'm looking for a job opportunity in the field of Software Development, where I can apply my skills and knowledge to contribute to innovative projects and make a positive impact.
            </li>
          </div>

          <div className="aboutButton">
            <Link href="/resume">
              <Button>
                Resume
                <TelegramLogo
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem',
                  }}
                  size={16}
                  weight="bold"
                />
              </Button>
            </Link>
            <Link href="/about">
              <ButtonAlternatives>
                Read more
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem',
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
