'use client';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import SocialLinks from '../SocialLinks/SocialLinks';
export default function Footer() { return <footer className="site-footer"><div className="container"><div className="footer-main"><Link className="brand footer-brand" href="/"><span className="brand-mark">SS</span><span><strong>{siteConfig.name}</strong><small>{siteConfig.title}</small></span></Link><p>Building a better web, one thoughtful interface at a time.</p><div className="footer-nav"><Link href="/">Home</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div><SocialLinks variant="footer" /></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sajjad Saleem. Learning, building, iterating.</span><button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">Back to top <ArrowUp size={14} /></button></div></div></footer>; }
