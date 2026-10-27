
'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

import { projects } from '../../data/portfolioData';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects({ fullPage = false }) {
  const reduce = useReducedMotion();

  const shown = fullPage ? projects : projects.slice(0, 3);

  return (
    <section
      className={`section projects-section ${
        fullPage ? 'projects-page-section' : ''
      }`}
      aria-labelledby="projects-title"
    >
      <div className="container">
        {/* Projects introduction */}
        <div className="projects-intro">
          <div>
            <p className="eyebrow">
              {fullPage ? 'MY PORTFOLIO' : '05 / SELECTED WORK'}
            </p>

            <h1 id="projects-title">
              {fullPage ? (
                <>
                  Projects I’ve <span>Built</span>
                </>
              ) : (
                <>
                  A few things I’m <span>building</span>
                </>
              )}
            </h1>

            <p className="section-lede">
              {fullPage
                ? 'These projects demonstrate my learning journey and practical web development skills.'
                : 'Learning in public through interfaces, experiments, and practical web application work.'}
            </p>
          </div>

          <div className="project-count">
            <strong>
              {projects.length.toString().padStart(2, '0')}
            </strong>

            <span>
              projects
              <br />
              in the collection
            </span>
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            show: {
              transition: {
                staggerChildren: reduce ? 0 : 0.08,
              },
            },
          }}
        >
          {shown.map((project) => (
            <motion.div
              key={project.id}
              variants={
                reduce
                  ? {}
                  : {
                      hidden: {
                        opacity: 0,
                        y: 18,
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                      },
                    }
              }
            >
              <ProjectCard
                project={{
                  ...project,
                  image:
                    project.id === 'ecommerce'
                      ? '/images/ecommerce-preview.png'
                      : project.image,
                }}
                featured={!fullPage && project.id === 'ecommerce'}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom action */}
        {!fullPage ? (
          <div className="section-end-action">
            <Link className="text-link" href="/projects">
              View All Projects <ArrowUpRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="project-cta">
            <p className="eyebrow">LET’S MAKE SOMETHING USEFUL</p>

            <h2>Have an Idea for a Project?</h2>

            <p>
              Let’s connect and explore how we can turn an idea into a useful
              web experience.
            </p>

            <Link className="button button-primary" href="/contact">
              Contact Me <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
