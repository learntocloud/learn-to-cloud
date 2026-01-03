import React from 'react';
import styles from './styles.module.css';

type LinkItem = {
  icon: string;
  title: string;
  description: string;
  href: string;
  color: string;
};

const links: LinkItem[] = [
  {
    icon: '⭐',
    title: 'Star on GitHub',
    description: 'Support the project',
    href: 'https://github.com/learntocloud/learn-to-cloud',
    color: '#f59e0b',
  },
  {
    icon: '💬',
    title: 'Join Discord',
    description: 'Connect with learners',
    href: 'https://discord.gg/Qymw28nQX6',
    color: '#5865f2',
  },
  {
    icon: '🐦',
    title: 'Follow on X',
    description: 'Get guide updates',
    href: 'https://x.com/madebygps',
    color: '#000000',
  },
  {
    icon: '🎬',
    title: 'Subscribe on YouTube',
    description: 'Watch tutorials',
    href: 'https://youtube.com/madebygps',
    color: '#ef4444',
  },
];

export default function CommunityLinks(): JSX.Element {
  return (
    <section className={styles.community}>
      <h2 className={styles.communityTitle}>Join the Community</h2>
      <div className={styles.linksGrid}>
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
            style={{ '--link-color': link.color } as React.CSSProperties}
          >
            <span className={styles.linkIcon}>{link.icon}</span>
            <div className={styles.linkContent}>
              <span className={styles.linkTitle}>{link.title}</span>
              <span className={styles.linkDescription}>{link.description}</span>
            </div>
            <span className={styles.linkArrow}>→</span>
          </a>
        ))}
      </div>
      <p className={styles.goodLuck}>Good luck on your journey! 🚀</p>
    </section>
  );
}
