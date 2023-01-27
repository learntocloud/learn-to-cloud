import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

function HomepageApi() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('https://clouddictionary.azurewebsites.net/api/GetRandomDefinition'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className={styles.cloudapi}>
      {
        data && data.length > 0 && data.map((object) => <p>{object}</p>)
      }
    </div>
  );
}

export default HomepageApi;