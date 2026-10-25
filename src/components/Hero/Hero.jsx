
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import SocialLinks from '../SocialLinks/SocialLinks';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const enter = reduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: 'easeOut',
          },
        },
      };

  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="hero-grid container">

        {/* Hero Content */}
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : 'hidden'}
          animate="show"
          variants={enter}
        >
          <div className="eyebrow-line">
            <span className="eyebrow-dot" />
            HELLO, I’M
          </div>

          <h1 id="hero-title">
            Sajjad <span>Saleem</span>
          </h1>

          <p className="hero-kicker">
            Building Modern Web Experiences
          </p>

          <p className="hero-intro">
            I’m a Modern Web Application Developer focused on
            creating responsive, user-friendly, and visually
            engaging web applications.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">
              Explore My Work
              <ArrowDownRight size={17} />
            </Link>

            <Link className="button button-ghost" href="/contact">
              Contact Me
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="hero-meta">
            <span className="status-badge">
              <span />
              Open to Internship Opportunities
            </span>

            <span className="hero-note">
              Clean Code, Better Web
            </span>
          </div>

          <SocialLinks variant="hero" />
        </motion.div>

        {/* Hero Image and Visuals */}
        <motion.div
          className="hero-visual"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, scale: 0.96 }
          }
          animate={
            reduceMotion
              ? {}
              : { opacity: 1, scale: 1 }
          }
          transition={{
            duration: 0.8,
            delay: 0.12,
          }}
        >
          <div className="ambient-orb" />

          {/* Top Code Panel */}
          <div className="code-panel code-panel-top">
            <span className="code-dot red" />
            <span className="code-dot yellow" />
            <span className="code-dot green" />

            <code>
              const craft = {'{'}
              <br />
              &nbsp; clarity: true,
              <br />
              &nbsp; curiosity: ∞
              <br />
              {'}'}
            </code>
          </div>

          {/* Your Profile Picture */}
          <div className="portrait-frame">
            <Image
              src="/images/sajjad.png"
              alt="Sajjad Saleem - Web Developer"
              width={600}
              height={600}
              priority
              className="developer-portrait"
              sizes="(max-width: 768px) 90vw, 420px"
            />

            <div className="portrait-corner" />
          </div>

          {/* Bottom Code Panel */}
          <div className="code-panel code-panel-bottom">
            <span className="terminal-icon"> &gt;_ </span>
            <span>npm run build</span>
            <b>✓</b>
          </div>

          <div className="visual-caption">
            <span>01</span>
            <span>DEVELOPER / LEARNER</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll to About section"
      >
        <span>Scroll to explore</span>
        <ArrowDownRight size={17} />
      </a>
    </section>
  );
}
