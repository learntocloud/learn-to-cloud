import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    icon: '💵',
    title: 'Free and Open Source',
    description:
      'No paywalls, no subscriptions. Learn cloud skills with community-driven content that\'s always free and continuously improved by contributors worldwide.',
  },
  {
    icon: '📝',
    title: 'Resources, Tasks & Projects',
    description:
      'Hands-on learning with curated resources, practical tasks, and real-world projects that build your portfolio while you learn.',
  },
  {
    icon: '👷🏽‍♀️',
    title: 'Built from Experience',
    description:
      'Created by cloud professionals who\'ve walked the path. Learn what actually matters for landing your first cloud role.',
  },
  {
    icon: '🚀',
    title: 'Structured Learning Path',
    description:
      'Follow a clear roadmap from fundamentals to advanced topics. No more wondering what to learn next.',
  },
  {
    icon: '🌐',
    title: 'Cloud Agnostic',
    description:
      'Learn concepts that apply across AWS, Azure, and GCP. Build a foundation that works anywhere.',
  },
  {
    icon: '🤝',
    title: 'Community Support',
    description:
      'Join thousands of learners on Discord. Get help, share progress, and connect with others on the same journey.',
  },
];

function Feature({ icon, title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Learn to Cloud?</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to start your cloud career, completely free.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
