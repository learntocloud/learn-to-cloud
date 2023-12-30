import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  //description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '💵 Free and Open Source',
    //Svg: require('@site/static/img/undraw_open_source.svg').default,
    
  },
  {
    title: '📝 Resources, tasks, and projects',
   // Svg: require('@site/static/img/undraw_organizing_projects.svg').default,
    
  },
  {
    title: '👷🏽‍♀️ Built from first hand experience',
   // Svg: require('@site/static/img/undraw_co-working.svg').default,
    
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
