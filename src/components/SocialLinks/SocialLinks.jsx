import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { siteConfig } from '../../config/siteConfig';
const links = [
  { label: 'GitHub', href: siteConfig.githubUrl, icon: FaGithub, external: true },
  { label: 'LinkedIn', href: siteConfig.linkedinUrl, icon: FaLinkedinIn, external: true },
  { label: 'WhatsApp', href: siteConfig.whatsappUrl, icon: FaWhatsapp, external: true },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: FaEnvelope, external: false },
];
export default function SocialLinks({ variant = 'default' }) { return <div className={`social-links social-links-${variant}`} aria-label="Social links">{links.map(({ label, href, icon: Icon, external }) => <a key={label} href={href} aria-label={label === 'WhatsApp' ? 'Contact Sajjad on WhatsApp' : `${label} — Sajjad Saleem`} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}><Icon aria-hidden="true" /></a>)}</div>; }
export { links };
