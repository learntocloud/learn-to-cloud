import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageApi from '../components/HomepageApi';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import Image from '@theme/IdealImage';
import bannerImg from '../../static/img/LTC-HQ1.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/*<Image img={bannerImg} className={styles.featureImg} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="An open-source guide to the fundamentals of Cloud Computing">
      <HomepageHeader />
      <p className={styles.gradientText}>CLOUD DEFINITION OF THE DAY:</p>
      <HomepageApi />
      <div className={styles.buttons}>
        <Link
          className={styles.btngrad}
          to="/docs/Welcome">
          Go to Guide
        </Link>
        <br></br>
        <Link
          className={styles.btngrad2}
          to="https://github.com/learntocloud/cloud-dictionary/issues/new/choose">
          Submit a definition
        </Link>
      </div>
      <main>


      </main>
    </Layout>
  );
}
