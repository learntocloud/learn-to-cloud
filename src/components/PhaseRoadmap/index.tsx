import React from 'react';
import styles from './styles.module.css';

type PhaseItem = {
  number: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
};

const phases: PhaseItem[] = [
  {
    number: 0,
    title: 'Starting from Zero',
    description: 'Set up your environment and understand the cloud landscape',
    icon: '🌱',
    link: '/phase0',
    color: '#10b981',
  },
  {
    number: 1,
    title: 'Linux & Bash',
    description: 'Version control, CLI, SSH, and infrastructure basics',
    icon: '🐧',
    link: '/phase1',
    color: '#f59e0b',
  },
  {
    number: 2,
    title: 'Programming & AI',
    description: 'Python, APIs, databases, and AI integration',
    icon: '🐍',
    link: '/phase2',
    color: '#3b82f6',
  },
  {
    number: 3,
    title: 'Cloud Platforms',
    description: 'VMs, networking, security, and deploying applications',
    icon: '☁️',
    link: '/phase3',
    color: '#8b5cf6',
  },
  {
    number: 4,
    title: 'DevOps',
    description: 'Containers, CI/CD, Infrastructure as Code, and monitoring',
    icon: '🔄',
    link: '/phase4',
    color: '#ec4899',
  },
  {
    number: 5,
    title: 'Security',
    description: 'IAM, data protection, network security, and incident response',
    icon: '🔐',
    link: '/phase5',
    color: '#ef4444',
  },
];

function PhaseCard({ number, title, description, icon, link, color }: PhaseItem) {
  return (
    <a href={link} className={styles.phaseCard} style={{ '--phase-color': color } as React.CSSProperties}>
      <div className={styles.phaseNumber}>
        <span className={styles.phaseIcon}>{icon}</span>
        <span className={styles.phaseLabel}>Phase {number}</span>
      </div>
      <h3 className={styles.phaseTitle}>{title}</h3>
      <p className={styles.phaseDescription}>{description}</p>
      <span className={styles.phaseArrow}>→</span>
    </a>
  );
}

export default function PhaseRoadmap(): JSX.Element {
  return (
    <section className={styles.roadmap}>
      <div className={styles.roadmapHeader}>
        <h2 className={styles.roadmapTitle}>🗺️ The Learning Path</h2>
        <p className={styles.roadmapSubtitle}>
          Six phases to take you from zero to cloud engineer
        </p>
      </div>
      <div className={styles.phasesGrid}>
        {phases.map((phase) => (
          <PhaseCard key={phase.number} {...phase} />
        ))}
      </div>
    </section>
  );
}
