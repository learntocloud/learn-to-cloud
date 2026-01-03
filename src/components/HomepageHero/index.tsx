import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: '💵',
    title: 'Free & Open Source',
    description: 'No paywalls. Community-driven and always free.',
  },
  {
    icon: '📝',
    title: 'Hands-on Learning',
    description: 'Practical tasks and real-world projects for your portfolio.',
  },
  {
    icon: '👷🏽‍♀️',
    title: 'Built from Experience',
    description: 'Created by cloud professionals who\'ve walked the path.',
  },
  {
    icon: '🚀',
    title: 'Structured Path',
    description: 'Clear roadmap from fundamentals to advanced topics.',
  },
  {
    icon: '🌐',
    title: 'Cloud Agnostic',
    description: 'Learn concepts that apply across AWS, Azure, and GCP.',
  },
  {
    icon: '🤝',
    title: 'Community Support',
    description: 'Join thousands of learners on Discord.',
  },
];

export default function HomepageHero(): JSX.Element {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          Learn to <span className={styles.highlight}>Cloud</span>
        </h1>
        <p className={styles.heroSubtitle}>
          The most up-to-date guide to becoming a cloud engineer.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
