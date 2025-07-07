import Link from 'next/link'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FooterContainer, FooterContent } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <h4>&copy; {new Date().getFullYear()} Saravanakumar</h4>
        <div className="footer_links">
          <Link href="/privacypolicy" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
          <Link href="/terms&condition" aria-label="Terms and Conditions">
            Terms and Conditions
          </Link>
        </div>
      </FooterContent>

      <div className="links">
        <Link
          href="https://github.com/Santa-28"
          target="_blank"
          aria-label="Link to Github"
        >
          <FiGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/Saravanakumar28/"
          target="_blank"
          aria-label="Link to Linkedin"
        >
          <FiLinkedin />
        </Link>
        <Link
          href="https://www.instagram.com/x__santa__.x/"
          target="_blank"
          aria-label="Instagram"
        >
          <FiInstagram />
        </Link>
      </div>
    </FooterContainer>
  )
}
