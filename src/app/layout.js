import './globals.css';
import '../components/Navbar/Navbar.css';
import '../components/Hero/Hero.css';
import '../components/About/About.css';
import '../components/Skills/Skills.css';
import '../components/Projects/Projects.css';
import '../components/ProjectCard/ProjectCard.css';
import '../components/Services/Services.css';
import '../components/Education/Education.css';
import '../components/Contact/Contact.css';
import '../components/ContactForm/ContactForm.css';
import '../components/SocialLinks/SocialLinks.css';
import '../components/Footer/Footer.css';
import { ThemeProvider } from '../components/ThemeProvider';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { siteConfig } from '../config/siteConfig';

export const metadata = {
  title: { default: `${siteConfig.name} | ${siteConfig.title}`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    type: 'website',
    images: [{ url: '/images/portfolio-preview.svg', width: 1200, height: 630, alt: 'Sajjad Saleem developer portfolio illustration' }],
  },
  icons: { icon: '/icons/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try { const saved = localStorage.getItem('sajjad-theme'); if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved; } catch (e) {}` }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
