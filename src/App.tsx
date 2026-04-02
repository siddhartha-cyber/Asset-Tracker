import { useState, useEffect, useRef, type ReactNode, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import {
  Box, Shield, BarChart3, Wrench, ClipboardList, Package,
  ArrowRight, CheckCircle2, Star, Menu, X, Zap,
  Monitor, Users, Bell, Search, FileDown, Upload,
  LayoutDashboard, AlertTriangle, RefreshCw, ChevronRight,
  CircleDot, Settings, TrendingUp, DollarSign
} from 'lucide-react'
import './App.css'

/* ===== STAR BUTTON ===== */
function StarBackground({ color }: { color?: string }) {
  return (
    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_408_119)">
        <path d="M32.34 26.68C32.34 26.3152 32.0445 26.02 31.68 26.02C31.3155 26.02 31.02 26.3152 31.02 26.68C31.02 27.0448 31.3155 27.34 31.68 27.34C32.0445 27.34 32.34 27.0448 32.34 26.68Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M56.1 3.96C56.4645 3.96 56.76 4.25519 56.76 4.62C56.76 4.98481 56.4645 5.28 56.1 5.28C55.9131 5.28 55.7443 5.20201 55.624 5.07762C55.5632 5.01446 55.5147 4.93904 55.4829 4.8559C55.4552 4.78243 55.44 4.70315 55.44 4.62C55.44 4.5549 55.4494 4.49174 55.4668 4.43244C55.4906 4.35188 55.5292 4.27775 55.5795 4.21329C55.7004 4.05926 55.8885 3.96 56.1 3.96ZM40.26 17.16C40.6245 17.16 40.92 17.4552 40.92 17.82C40.92 18.1848 40.6245 18.48 40.26 18.48C39.8955 18.48 39.6 18.1848 39.6 17.82C39.6 17.4552 39.8955 17.16 40.26 17.16ZM74.58 5.28C74.7701 5.28 74.9413 5.36057 75.0618 5.48882C75.073 5.50043 75.0837 5.51268 75.094 5.52557C75.1088 5.54426 75.1231 5.56359 75.1359 5.58357L75.1479 5.60291L75.1595 5.62353C75.1711 5.64481 75.1814 5.66672 75.1906 5.68928C75.2226 5.76662 75.24 5.85106 75.24 5.94C75.24 6.1585 75.1336 6.3525 74.9699 6.47238C74.9158 6.51234 74.8555 6.54393 74.7908 6.56584C74.7247 6.58775 74.6538 6.6 74.58 6.6C74.2156 6.6 73.92 6.30481 73.92 5.94C73.92 5.87684 73.929 5.8156 73.9455 5.7576C73.9596 5.70862 73.979 5.66221 74.0032 5.61903C74.0657 5.50688 74.1595 5.41471 74.2728 5.35541C74.3647 5.30707 74.4691 5.28 74.58 5.28ZM21.66 33.52C22.0245 33.52 22.32 33.8152 22.32 34.18C22.32 34.5448 22.0245 34.84 21.66 34.84C21.2955 34.84 21 34.5448 21 34.18C21 33.8152 21.2955 33.52 21.66 33.52ZM8.16 32.86C8.16 32.4952 7.8645 32.2 7.5 32.2C7.1355 32.2 6.84 32.4952 6.84 32.86C6.84 33.2248 7.1355 33.52 7.5 33.52C7.8645 33.52 8.16 33.2248 8.16 32.86ZM7.5 23.68C7.8645 23.68 8.16 23.9752 8.16 24.34C8.16 24.7048 7.8645 25 7.5 25C7.1355 25 6.84 24.7048 6.84 24.34C6.84 23.9752 7.1355 23.68 7.5 23.68ZM19.32 18.48C19.32 18.1152 19.0245 17.82 18.66 17.82C18.2955 17.82 18 18.1152 18 18.48C18 18.8448 18.2955 19.14 18.66 19.14C19.0245 19.14 19.32 18.8448 19.32 18.48ZM5.66 11.84C6.0245 11.84 6.32001 12.1352 6.32001 12.5C6.32001 12.8648 6.0245 13.16 5.66 13.16C5.2955 13.16 5 12.8648 5 12.5C5 12.1352 5.2955 11.84 5.66 11.84ZM35.16 35.5C35.16 35.1352 34.8645 34.84 34.5 34.84C34.1355 34.84 33.84 35.1352 33.84 35.5C33.84 35.8648 34.1355 36.16 34.5 36.16C34.8645 36.16 35.16 35.8648 35.16 35.5ZM53.5 36.18C53.8645 36.18 54.16 36.4752 54.16 36.84C54.16 37.2048 53.8645 37.5 53.5 37.5C53.1355 37.5 52.84 37.2048 52.84 36.84C52.84 36.4752 53.1355 36.18 53.5 36.18ZM48.5 28.66C48.5 28.2952 48.2045 28 47.84 28C47.4755 28 47.18 28.2952 47.18 28.66C47.18 29.0248 47.4755 29.32 47.84 29.32C48.2045 29.32 48.5 29.0248 48.5 28.66ZM60.34 27.34C60.7045 27.34 61 27.6352 61 28C61 28.3648 60.7045 28.66 60.34 28.66C59.9755 28.66 59.68 28.3648 59.68 28C59.68 27.6352 59.9755 27.34 60.34 27.34ZM56.284 16.5C56.284 16.1352 55.9885 15.84 55.624 15.84C55.2595 15.84 54.964 16.1352 54.964 16.5C54.964 16.8648 55.2595 17.16 55.624 17.16C55.9885 17.16 56.284 16.8648 56.284 16.5ZM46.2 7.26C46.2 6.89519 45.9045 6.6 45.54 6.6C45.5174 6.6 45.4953 6.60129 45.4733 6.60387L45.453 6.60579L45.4124 6.61225L45.3857 6.61804L45.3845 6.61836C45.3675 6.62277 45.3504 6.62721 45.3341 6.63287C45.2522 6.65929 45.1774 6.70184 45.1134 6.75597C45.0627 6.79916 45.0186 6.84943 44.9828 6.90551C44.9178 7.00799 44.88 7.12981 44.88 7.26C44.88 7.62481 45.1755 7.92 45.54 7.92C45.7372 7.92 45.9141 7.83363 46.0353 7.69635C46.0808 7.64478 46.1182 7.58613 46.1459 7.52232C46.1807 7.4424 46.2 7.35346 46.2 7.26ZM33 9.34C33 8.9752 32.7045 8.68 32.34 8.68C31.9755 8.68 31.68 8.9752 31.68 9.34C31.68 9.7048 31.9755 10 32.34 10C32.7045 10 33 9.7048 33 9.34ZM16 4.8559C16.3645 4.8559 16.66 5.1511 16.66 5.5159C16.66 5.8807 16.3645 6.1759 16 6.1759C15.6355 6.1759 15.34 5.8807 15.34 5.5159C15.34 5.1511 15.6355 4.8559 16 4.8559ZM69.66 21.16C69.66 20.7952 69.3645 20.5 69 20.5C68.6355 20.5 68.34 20.7952 68.34 21.16C68.34 21.5248 68.6355 21.82 69 21.82C69.3645 21.82 69.66 21.5248 69.66 21.16ZM80.52 15.18C80.52 14.8152 80.2245 14.52 79.86 14.52C79.4956 14.52 79.2 14.8152 79.2 15.18C79.2 15.5448 79.4956 15.84 79.86 15.84C80.2245 15.84 80.52 15.5448 80.52 15.18ZM78.16 34.84C78.16 34.4752 77.5 34.18 77.5 34.18C77.5 34.18 76.84 34.4752 76.84 34.84C76.84 35.2048 77.1355 35.5 77.5 35.5C77.8645 35.5 78.16 35.2048 78.16 34.84ZM85.66 24.34C86.0245 24.34 86.32 24.6352 86.32 25C86.32 25.3648 86.0245 25.66 85.66 25.66C85.2955 25.66 85 25.3648 85 25C85 24.6352 85.2955 24.34 85.66 24.34ZM91.32 10C91.32 9.6352 91.0245 9.34 90.66 9.34C90.2955 9.34 90 9.6352 90 10C90 10.3648 90.2955 10.66 90.66 10.66C91.0245 10.66 91.32 10.3648 91.32 10ZM138.6 0H0V46.2H138.6V0ZM92.64 34.84C92.64 34.4752 91.98 34.18 91.98 34.18C91.98 34.18 91.32 34.4752 91.32 34.84C91.32 35.2048 91.6155 35.5 91.98 35.5C92.3445 35.5 92.64 35.2048 92.64 34.84Z" fill={color || "currentColor"}/>
      </g>
      <defs><clipPath id="clip0_408_119"><rect width="100" height="40" fill="white"/></clipPath></defs>
    </svg>
  );
}

function StarButton({
  children,
  lightWidth = 110,
  duration = 3,
  lightColor = '#a78bfa',
  backgroundColor = 'currentColor',
  borderWidth = 2,
  className,
  ...props
}: {
  children: ReactNode;
  lightWidth?: number;
  duration?: number;
  lightColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (btnRef.current) {
      const div = btnRef.current;
      div.style.setProperty(
        '--path',
        `path('M 0 0 H ${div.offsetWidth} V ${div.offsetHeight} H 0 V 0')`,
      );
    }
  }, []);

  return (
    <button
      style={{
        '--duration': duration,
        '--light-width': `${lightWidth}px`,
        '--light-color': lightColor,
        '--border-width': `${borderWidth}px`,
        isolation: 'isolate',
      } as CSSProperties}
      ref={btnRef}
      className={`star-button ${className || ''}`}
      {...props}
    >
      <div className="star-button-light" style={{ offsetPath: 'var(--path)', offsetDistance: '0%', width: 'var(--light-width)' } as CSSProperties} />
      <div className="star-button-border" style={{ borderWidth: 'var(--border-width)' }} aria-hidden="true">
        <StarBackground color={backgroundColor} />
      </div>
      <span className="star-button-text">{children}</span>
    </button>
  );
}

/* ===== HOLOGRAPHIC CARD ===== */
function HoloCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    card.style.setProperty('--holo-x', `${x}px`);
    card.style.setProperty('--holo-y', `${y}px`);
    card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.setProperty('--holo-x', '50%');
    card.style.setProperty('--holo-y', '50%');
    card.style.setProperty('--bg-x', '50%');
    card.style.setProperty('--bg-y', '50%');
  };

  return (
    <div
      ref={cardRef}
      className={`feature-card holo-card ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className="holo-glow" />
    </div>
  );
}

/* ===== CUSTOM SVG ICONS ===== */
const FeatureIcons = {
  assetMgmt: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <circle cx="12" cy="14" r="3" />
      <path d="M12 11v6" />
      <path d="M9 14h6" />
    </svg>
  ),
  allocations: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3" />
      <path d="M9 13c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4Z" />
      <path d="M17 11l2 2 4-4" />
      <circle cx="19" cy="7" r="2.5" strokeDasharray="3 2" />
    </svg>
  ),
  maintenance: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 6 12 12 16 14" />
      <path d="M20 4l1.5 1.5" />
      <path d="M4 20l-1.5-1.5" />
      <path d="M3.5 7L2 6.5" />
    </svg>
  ),
  repairs: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
    </svg>
  ),
  consumables: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  ),
  recovery: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  ),
};

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'rgba(139, 92, 246, 0.08)',
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`elegant-shape ${className || ''}`}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ width, height, position: 'relative' }}
      >
        <div
          className="elegant-shape-inner"
          style={{
            background: `linear-gradient(to right, ${gradient}, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <div className="nav-logo-icon">
            <Box size={20} />
          </div>
          Asset Tracker
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How it Works</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <div className="nav-cta">
          <button className="btn-secondary">Sign In</button>
          <StarButton lightColor="#a78bfa" backgroundColor="#8b5cf6" className="star-btn-nav">
            Get Started <ArrowRight size={16} style={{ marginLeft: 4 }} />
          </StarButton>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />

        {/* Animated Geometric Shapes */}
        <div className="hero-shapes">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="rgba(139, 92, 246, 0.15)"
            className="shape-1"
          />
          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="rgba(244, 63, 94, 0.12)"
            className="shape-2"
          />
          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="rgba(139, 92, 246, 0.12)"
            className="shape-3"
          />
          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="rgba(6, 182, 212, 0.12)"
            className="shape-4"
          />
          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="rgba(168, 85, 247, 0.12)"
            className="shape-5"
          />
        </div>

        <div className="hero-content">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Trusted by 500+ organizations
              </div>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Your Powerful<br />
              Gateway to<br />
              Smarter Asset<br />
              Management
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Streamline your organization's entire asset lifecycle with real-time tracking,
              automated maintenance scheduling, and comprehensive reporting all in one platform.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <StarButton
                lightColor="#a78bfa"
                backgroundColor="#8b5cf6"
                className="star-btn-hero"
              >
                Get Started <ArrowRight size={18} style={{ marginLeft: 6 }} />
              </StarButton>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="hero-stat">
                <div className="hero-stat-value">10K+</div>
                <div className="hero-stat-label">Assets Managed</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">500+</div>
                <div className="hero-stat-label">Companies</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">99.9%</div>
                <div className="hero-stat-label">Uptime</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="hero-3d-card">
              <div className="hero-card-header">
                <div className="hero-card-dot" style={{ background: '#f43f5e' }} />
                <div className="hero-card-dot" style={{ background: '#fbbf24' }} />
                <div className="hero-card-dot" style={{ background: '#10b981' }} />
                <span className="hero-card-title">Asset Dashboard</span>
              </div>
              <div className="hero-card-grid">
                <div className="hero-card-metric">
                  <div className="hero-card-metric-value">63</div>
                  <div className="hero-card-metric-label">Total Assets</div>
                </div>
                <div className="hero-card-metric">
                  <div className="hero-card-metric-value" style={{ color: '#10b981' }}>$80K</div>
                  <div className="hero-card-metric-label">Portfolio</div>
                </div>
                <div className="hero-card-metric">
                  <div className="hero-card-metric-value" style={{ color: '#8b5cf6' }}>19%</div>
                  <div className="hero-card-metric-label">Utilization</div>
                </div>
              </div>
              <div className="hero-card-bar">
                <div className="hero-card-bar-track">
                  <div className="hero-card-bar-fill" />
                </div>
                <div className="hero-card-bar-label">
                  <span>Asset Health</span>
                  <span>72%</span>
                </div>
              </div>
            </div>
            <motion.div
              className="hero-float-badge top-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <CheckCircle2 size={16} />
              Asset Allocated
            </motion.div>
            <motion.div
              className="hero-float-badge bottom-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <Bell size={14} />
              Maintenance Due
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="hero-bottom-fade" />
      </section>

      {/* TRUST BAR */}
      <div className="section-divider" />
      <div className="trust-bar">
        <span className="trust-logo">TECHCORP</span>
        <span className="trust-logo">INNOVATE</span>
        <span className="trust-logo">BUILDFAST</span>
        <span className="trust-logo">SCALEUP</span>
        <span className="trust-logo">NEXTERA</span>
        <span className="trust-logo">DATAFLOW</span>
      </div>
      <div className="section-divider" />

      {/* CORE FEATURES */}
      <section className="section" id="features">
        <div className="section-header">
          <div className="section-label">
            <Zap size={14} />
            Core Features
          </div>
          <h2 className="section-title">
            Complete Asset Performance at Your Fingertips
          </h2>
          <p className="section-subtitle">
            Everything you need to track, manage, and optimize your organization's assets
            through their entire lifecycle.
          </p>
        </div>

        <div className="features-grid">
          <HoloCard>
            <div className="feature-icon purple">
              {FeatureIcons.assetMgmt}
            </div>
            <h3 className="feature-title">Asset Management</h3>
            <p className="feature-description">
              Track every asset from procurement to disposal. Manage asset tags, categories,
              brands, locations, and real-time status with bulk import and export capabilities.
            </p>
          </HoloCard>

          <HoloCard>
            <div className="feature-icon blue">
              {FeatureIcons.allocations}
            </div>
            <h3 className="feature-title">Smart Allocations</h3>
            <p className="feature-description">
              Assign assets to employees with full allocation tracking. Monitor active, pending,
              and returned allocations across departments with automated workflows.
            </p>
          </HoloCard>

          <HoloCard>
            <div className="feature-icon cyan">
              {FeatureIcons.maintenance}
            </div>
            <h3 className="feature-title">Preventive Maintenance</h3>
            <p className="feature-description">
              Schedule and track maintenance automatically. Get alerts for upcoming tasks,
              assign technicians, and never miss a service date with overdue notifications.
            </p>
          </HoloCard>

          <HoloCard>
            <div className="feature-icon emerald">
              {FeatureIcons.repairs}
            </div>
            <h3 className="feature-title">Repair Tracking</h3>
            <p className="feature-description">
              Log repair requests with priority levels, assign vendors and technicians,
              track costs, and monitor progress from request to completion.
            </p>
          </HoloCard>

          <HoloCard>
            <div className="feature-icon orange">
              {FeatureIcons.consumables}
            </div>
            <h3 className="feature-title">Consumables Inventory</h3>
            <p className="feature-description">
              Monitor consumable stock levels with automatic threshold alerts. Track
              cost per unit, department usage, and reorder points across locations.
            </p>
          </HoloCard>

          <HoloCard>
            <div className="feature-icon rose">
              {FeatureIcons.recovery}
            </div>
            <h3 className="feature-title">Asset Recovery</h3>
            <p className="feature-description">
              Track incidents, losses, and fund recoveries. Report damages with severity levels,
              monitor investigation status, and track recovered amounts.
            </p>
          </HoloCard>
        </div>
      </section>

      <div className="section-divider" />

      {/* SPOTLIGHT - Asset Management */}
      <section className="section">
        <div className="spotlight">
          <div className="spotlight-content">
            <div className="spotlight-label">Asset Lifecycle</div>
            <h2 className="spotlight-title">
              Complete Visibility Into Every Asset
            </h2>
            <p className="spotlight-description">
              From laptops and monitors to furniture and equipment — track every asset
              your organization owns with detailed categorization and real-time status updates.
            </p>
            <div className="spotlight-features">
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Status Tracking:</strong> Available, Allocated, Under Maintenance, Retired, Disposed, Dead
                </span>
              </div>
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Bulk Operations:</strong> Import and export assets via CSV for quick onboarding
                </span>
              </div>
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Smart Search:</strong> Find any asset by tag, name, serial, brand, or location
                </span>
              </div>
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Dead Asset Tracking:</strong> Track written-off assets and their depreciated value
                </span>
              </div>
            </div>
          </div>
          <div className="spotlight-visual">
            <div className="mock-ui-header">
              <span className="mock-ui-title">Asset Management</span>
              <span className="mock-ui-badge">63 Assets</span>
            </div>
            <table className="mock-table">
              <thead>
                <tr>
                  <th>Asset Tag</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LAP-001</td>
                  <td>Lenovo T51</td>
                  <td>Laptop</td>
                  <td><span className="mock-status active">Active</span></td>
                </tr>
                <tr>
                  <td>MON-002</td>
                  <td>Dell Monitor</td>
                  <td>Monitor</td>
                  <td><span className="mock-status pending">Available</span></td>
                </tr>
                <tr>
                  <td>KEY-003</td>
                  <td>Keyboard</td>
                  <td>Peripheral</td>
                  <td><span className="mock-status active">Allocated</span></td>
                </tr>
                <tr>
                  <td>PRN-004</td>
                  <td>HP Printer</td>
                  <td>Printer</td>
                  <td><span className="mock-status maintenance">Maintenance</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SPOTLIGHT - Maintenance & Repairs */}
      <section className="section">
        <div className="spotlight reverse">
          <div className="spotlight-content">
            <div className="spotlight-label">Operations</div>
            <h2 className="spotlight-title">
              Automate Maintenance, Streamline Repairs
            </h2>
            <p className="spotlight-description">
              Never miss a maintenance window again. Schedule preventive maintenance,
              manage repair workflows, and keep your assets running at peak performance.
            </p>
            <div className="spotlight-features">
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Scheduled Maintenance:</strong> Automated preventive maintenance with technician assignment
                </span>
              </div>
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Repair Workflow:</strong> Priority-based requests with vendor and cost tracking
                </span>
              </div>
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Overdue Alerts:</strong> Never miss a service date with automated notifications
                </span>
              </div>
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Cost Analysis:</strong> Track maintenance and repair costs per asset over time
                </span>
              </div>
            </div>
          </div>
          <div className="spotlight-visual">
            <div className="mock-ui-header">
              <span className="mock-ui-title">Operations Overview</span>
              <span className="mock-ui-badge">This Month</span>
            </div>
            <div className="mock-stats-row">
              <div className="mock-stat-card">
                <div className="mock-stat-value" style={{ color: '#8b5cf6' }}>12</div>
                <div className="mock-stat-label">Scheduled</div>
              </div>
              <div className="mock-stat-card">
                <div className="mock-stat-value" style={{ color: '#f97316' }}>3</div>
                <div className="mock-stat-label">In Progress</div>
              </div>
              <div className="mock-stat-card">
                <div className="mock-stat-value" style={{ color: '#10b981' }}>28</div>
                <div className="mock-stat-label">Completed</div>
              </div>
            </div>
            <div className="mock-chart">
              {[65, 45, 80, 55, 90, 70, 85, 50, 75, 95, 60, 82].map((h, i) => (
                <div key={i} className="mock-chart-bar" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SPOTLIGHT - Requests & Allocations */}
      <section className="section">
        <div className="spotlight">
          <div className="spotlight-content">
            <div className="spotlight-label">Workflow</div>
            <h2 className="spotlight-title">
              Request, Approve, Allocate — Seamlessly
            </h2>
            <p className="spotlight-description">
              Employees can request assets, managers approve with one click, and allocations
              are tracked automatically — complete with department-level visibility.
            </p>
            <div className="spotlight-features">
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Asset Requests:</strong> Employees submit requests with urgency levels
                </span>
              </div>
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Approval Workflow:</strong> Pending, Approved, Fulfilled, Rejected status tracking
                </span>
              </div>
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Allocation History:</strong> Full audit trail of who had what and when
                </span>
              </div>
              <div className="spotlight-feature-item">
                <div className="spotlight-feature-icon"><CheckCircle2 size={14} /></div>
                <span className="spotlight-feature-text">
                  <strong>Return Management:</strong> Track asset returns and reassign efficiently
                </span>
              </div>
            </div>
          </div>
          <div className="spotlight-visual">
            <div className="mock-ui-header">
              <span className="mock-ui-title">Asset Requests</span>
              <span className="mock-ui-badge">5 Pending</span>
            </div>
            <table className="mock-table">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Requested By</th>
                  <th>Urgency</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lenovo Laptop</td>
                  <td>Rahul J.</td>
                  <td style={{ color: '#f43f5e' }}>High</td>
                  <td><span className="mock-status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Dell Monitor</td>
                  <td>Sarah K.</td>
                  <td style={{ color: '#f97316' }}>Medium</td>
                  <td><span className="mock-status active">Approved</span></td>
                </tr>
                <tr>
                  <td>Keyboard Set</td>
                  <td>Mike T.</td>
                  <td style={{ color: '#10b981' }}>Low</td>
                  <td><span className="mock-status active">Fulfilled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div className="section-header">
          <div className="section-label">
            <Settings size={14} />
            How It Works
          </div>
          <h2 className="section-title">Get Started in Minutes</h2>
          <p className="section-subtitle">
            From setup to full asset visibility in four simple steps.
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3 className="step-title">Create Your Org</h3>
            <p className="step-description">
              Set up your organization, departments, and locations in minutes.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3 className="step-title">Add Your Assets</h3>
            <p className="step-description">
              Import assets via CSV or add them individually with full details.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3 className="step-title">Assign & Track</h3>
            <p className="step-description">
              Allocate assets to employees and start tracking their lifecycle.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3 className="step-title">Optimize & Report</h3>
            <p className="step-description">
              Schedule maintenance, track repairs, and generate insights.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* DASHBOARD PREVIEW */}
      <section className="section" id="dashboard">
        <div className="section-header">
          <div className="section-label">
            <Monitor size={14} />
            Live Dashboard
          </div>
          <h2 className="section-title">
            Your Command Center for Asset Operations
          </h2>
          <p className="section-subtitle">
            Get a bird's eye view of your entire asset portfolio — financial summaries,
            utilization metrics, and operational health at a glance.
          </p>
        </div>

        <div className="dashboard-preview">
          <div className="dashboard-toolbar">
            <div className="dashboard-dot" style={{ background: '#f43f5e' }} />
            <div className="dashboard-dot" style={{ background: '#fbbf24' }} />
            <div className="dashboard-dot" style={{ background: '#10b981' }} />
            <span style={{ marginLeft: 12, fontSize: 13, color: 'var(--text-muted)' }}>
              asset.tracker — Dashboard
            </span>
          </div>
          <div className="dashboard-body">
            <div className="dashboard-sidebar">
              <div className="dashboard-sidebar-item active">
                <LayoutDashboard size={16} /> Dashboard
              </div>
              <div className="dashboard-sidebar-item">
                <Box size={16} /> Assets
              </div>
              <div className="dashboard-sidebar-item">
                <AlertTriangle size={16} /> Dead Assets
              </div>
              <div className="dashboard-sidebar-item">
                <Users size={16} /> Allocations
              </div>
              <div className="dashboard-sidebar-item">
                <Package size={16} /> Consumables
              </div>
              <div className="dashboard-sidebar-item">
                <ClipboardList size={16} /> Requests
              </div>
              <div className="dashboard-sidebar-item">
                <Wrench size={16} /> Maintenance
              </div>
              <div className="dashboard-sidebar-item">
                <Settings size={16} /> Repairs
              </div>
              <div className="dashboard-sidebar-item">
                <RefreshCw size={16} /> Recovery
              </div>
            </div>
            <div className="dashboard-main">
              <div className="dashboard-kpi-row">
                <div className="dashboard-kpi">
                  <div className="dashboard-kpi-value" style={{ color: '#8b5cf6' }}>63</div>
                  <div className="dashboard-kpi-label">Total Assets</div>
                </div>
                <div className="dashboard-kpi">
                  <div className="dashboard-kpi-value" style={{ color: '#10b981' }}>$80,312</div>
                  <div className="dashboard-kpi-label">Total Value</div>
                </div>
                <div className="dashboard-kpi">
                  <div className="dashboard-kpi-value" style={{ color: '#3b82f6' }}>19%</div>
                  <div className="dashboard-kpi-label">Utilization</div>
                </div>
                <div className="dashboard-kpi">
                  <div className="dashboard-kpi-value" style={{ color: '#fbbf24' }}>5</div>
                  <div className="dashboard-kpi-label">Active Users</div>
                </div>
              </div>
              <div className="dashboard-charts-row">
                <div className="dashboard-chart-card">
                  <div className="dashboard-chart-title">Financial Summary</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Asset Portfolio</span>
                      <span style={{ fontWeight: 600 }}>$80,312.00</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Avg. Asset Value</span>
                      <span style={{ fontWeight: 600 }}>$1,274.79</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Maintenance Costs</span>
                      <span style={{ fontWeight: 600, color: '#10b981' }}>$0.00</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Repair Costs</span>
                      <span style={{ fontWeight: 600, color: '#10b981' }}>$0.00</span>
                    </div>
                  </div>
                </div>
                <div className="dashboard-chart-card">
                  <div className="dashboard-chart-title">Asset Distribution</div>
                  <div className="mock-chart" style={{ height: 100 }}>
                    {[40, 25, 15, 10, 8, 2].map((h, i) => (
                      <div key={i} className="mock-chart-bar" style={{ height: `${h * 2.5}%` }} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 8, fontSize: 10, color: 'var(--text-muted)' }}>
                    <span>IT</span>
                    <span>Office</span>
                    <span>Lab</span>
                    <span>Vehicle</span>
                    <span>Other</span>
                    <span>Dead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="section-header">
          <div className="section-label">
            <DollarSign size={14} />
            Pricing
          </div>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that fits your organization. No hidden fees.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-plan">Beginner</div>
            <div className="pricing-price">$0 <span>/ mo</span></div>
            <p className="pricing-price-annual">$0/year</p>
            <p className="pricing-desc">For small teams getting started</p>
            <ul className="pricing-features">
              <li><CheckCircle2 size={16} className="pricing-check" /> Up to 50 Assets</li>
              <li><CheckCircle2 size={16} className="pricing-check" /> 5 Users</li>
              <li><CheckCircle2 size={16} className="pricing-check" /> 1 Location</li>
              <li><CheckCircle2 size={16} className="pricing-check" /> 10 QR Batch</li>
            </ul>
            <div className="pricing-tags">
              <span className="pricing-tag">Audits</span>
              <span className="pricing-tag">Adv. Filters</span>
              <span className="pricing-tag">Custom Columns</span>
              <span className="pricing-tag">Bulk QR</span>
              <span className="pricing-tag">Depreciation</span>
              <span className="pricing-tag">Reports</span>
              <span className="pricing-tag">Documents</span>
              <span className="pricing-tag">Procurement</span>
            </div>
            <StarButton lightColor="#a78bfa" backgroundColor="#8b5cf6" className="star-btn-pricing">
              Get Started <ArrowRight size={16} style={{ marginLeft: 4 }} />
            </StarButton>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-plan">Pro</div>
            <div className="pricing-price">$29.99 <span>/ mo</span></div>
            <p className="pricing-price-annual">$299.99/year</p>
            <p className="pricing-desc">For growing organizations</p>
            <ul className="pricing-features">
              <li><CheckCircle2 size={16} className="pricing-check" /> Up to 500 Assets</li>
              <li><CheckCircle2 size={16} className="pricing-check" /> 25 Users</li>
              <li><CheckCircle2 size={16} className="pricing-check" /> 5 Locations</li>
              <li><CheckCircle2 size={16} className="pricing-check" /> 50 QR Batch</li>
            </ul>
            <div className="pricing-tags">
              <span className="pricing-tag">Audits</span>
              <span className="pricing-tag">Adv. Filters</span>
              <span className="pricing-tag">Custom Columns</span>
              <span className="pricing-tag">Bulk QR</span>
              <span className="pricing-tag">Depreciation</span>
              <span className="pricing-tag">Reports</span>
              <span className="pricing-tag">Documents</span>
              <span className="pricing-tag">Procurement</span>
            </div>
            <StarButton lightColor="#a78bfa" backgroundColor="#8b5cf6" className="star-btn-pricing">
              Get Started <ArrowRight size={16} style={{ marginLeft: 4 }} />
            </StarButton>
          </div>

          <div className="pricing-card">
            <div className="pricing-plan">Premium</div>
            <div className="pricing-price">$79.99 <span>/ mo</span></div>
            <p className="pricing-price-annual">$799.99/year</p>
            <p className="pricing-desc">For large-scale operations</p>
            <ul className="pricing-features">
              <li><CheckCircle2 size={16} className="pricing-check" /> Unlimited Assets</li>
              <li><CheckCircle2 size={16} className="pricing-check" /> Unlimited Users</li>
              <li><CheckCircle2 size={16} className="pricing-check" /> Unlimited Locations</li>
              <li><CheckCircle2 size={16} className="pricing-check" /> Unlimited QR Batch</li>
            </ul>
            <div className="pricing-tags">
              <span className="pricing-tag">Audits</span>
              <span className="pricing-tag">Adv. Filters</span>
              <span className="pricing-tag">Custom Columns</span>
              <span className="pricing-tag">Bulk QR</span>
              <span className="pricing-tag">Depreciation</span>
              <span className="pricing-tag">Reports</span>
              <span className="pricing-tag">Documents</span>
              <span className="pricing-tag">Procurement</span>
            </div>
            <StarButton lightColor="#a78bfa" backgroundColor="#8b5cf6" className="star-btn-pricing">
              Get Started <ArrowRight size={16} style={{ marginLeft: 4 }} />
            </StarButton>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="section-header">
          <div className="section-label">
            <Star size={14} />
            Testimonials
          </div>
          <h2 className="section-title">Loved by Operations Teams</h2>
          <p className="section-subtitle">
            See what our customers have to say about Asset Tracker.
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" />)}
            </div>
            <p className="testimonial-text">
              "Asset Tracker completely transformed how we manage our IT equipment.
              We went from spreadsheets to full visibility in a week."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">R</div>
              <div>
                <div className="testimonial-name">Rahul Sharma</div>
                <div className="testimonial-role">IT Manager, TechCorp</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" />)}
            </div>
            <p className="testimonial-text">
              "The maintenance scheduling alone saved us thousands in repair costs.
              The dashboard gives me everything I need at a glance."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">S</div>
              <div>
                <div className="testimonial-name">Sarah Chen</div>
                <div className="testimonial-role">Operations Lead, ScaleUp</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" />)}
            </div>
            <p className="testimonial-text">
              "The asset request workflow is brilliant. Employees request, managers approve,
              and everything is tracked automatically. No more lost equipment."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">A</div>
              <div>
                <div className="testimonial-name">Ahmed Khan</div>
                <div className="testimonial-role">Facilities Director, BuildFast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Take Control of Your Assets?
          </h2>
          <p className="cta-subtitle">
            Get started today. No credit card required.
            Set up in minutes, see results immediately.
          </p>
          <div className="cta-buttons">
            <StarButton lightColor="#a78bfa" backgroundColor="#8b5cf6" className="star-btn-hero">
              Get Started <ArrowRight size={18} style={{ marginLeft: 6 }} />
            </StarButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <div className="nav-logo" style={{ marginBottom: 0 }}>
              <div className="nav-logo-icon">
                <Box size={20} />
              </div>
              Asset Tracker
            </div>
            <p className="footer-brand-description">
              Streamline your organization's asset lifecycle with real-time tracking,
              automated maintenance, and comprehensive reporting.
            </p>
          </div>
          <div>
            <h4 className="footer-col-title">Product</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#dashboard">Dashboard</a></li>
              <li><a href="#">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Asset Tracker by 1XL Ventures. All rights reserved.</span>
          <span>Built with purpose.</span>
        </div>
      </footer>
    </>
  )
}

export default App
