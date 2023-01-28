import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function HomepageApi() {
  const [words, setWords] = useState();
  const getData = () => {
    fetch('https://clouddictionary.azurewebsites.net/api/GetRandomDefinition'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setWords(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      })
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className={styles.flex}>
    <div className={styles.card}>
      <h3>Cloud word of the day</h3>
      <a href={words?.LearnMoreUrl}><h4><strong>{words?.Word}</strong></h4></a>
      <h5>{words?.Content}</h5>
      <a href={words?.Author.Link}><h6> - {words?.Author.Name}</h6></a>
      <a href="https://github.com/learntocloud/cloud-dictionary/issues/new/choose"><button className={styles.button}> Submit your own definition</button></a>
    </div>
    </div>

  );
}