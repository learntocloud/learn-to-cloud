import React, { useState, useEffect } from 'react';

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
    <div className="App">
      {
        data && data.length > 0 && data.map((item) => <p>{item.about}</p>)
      }
    </div>
  );
}

export default HomepageApi;