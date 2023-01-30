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
      <a href={words?.LearnMoreUrl}><h4><strong>{words?.Word}</strong></h4></a>
      <h5>{words?.Content}</h5>
      <a href={words?.Author.Link}><h6> - {words?.Author.Name}</h6></a>
    </div>
    </div>

  );
}