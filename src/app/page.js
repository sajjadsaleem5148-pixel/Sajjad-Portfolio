import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Services from '../components/Services/Services';
import Education from '../components/Education/Education';
import FeaturedProjects from '../components/Projects/Projects';

export const metadata = { title: 'Home', description: 'Explore Sajjad Saleem’s modern web development portfolio, learning journey, and project work.' };

export default function HomePage() {
  return <>
    <Hero />
    <About />
    <Skills />
    <Services />
    <Education />
    <FeaturedProjects />
    <section className="section section-cta" aria-labelledby="home-cta-title">
      <div className="container cta-panel reveal-card">
        <div><p className="eyebrow">NEXT STEP</p><h2 id="home-cta-title">Have a useful idea in mind?</h2><p>Let’s connect and shape it into a thoughtful web experience.</p></div>
        <a className="button button-primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </>;
}
