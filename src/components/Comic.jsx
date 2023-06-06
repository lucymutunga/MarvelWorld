import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Comics = () => {
  const [comics, setComics] = useState([]);

  const apiURL =`https://gateway.marvel.com:443/v1/public/comics?limit=50&apikey=0fc969e9198cb9b9859e37e527e0cfb1`
  
    

  const getMarvelComics = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data;
      const comicsData = data?.data?.results;
      setComics(comicsData);
      console.log(comicsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMarvelComics();
    document.title = "Comics"
  }, []);

  return (
    <div className="comics">
      <h4>Marvel Comics</h4>
      <div className="comics-list">
        {comics.map((comic) => {
          const { id, name, thumbnail, title } = comic;
          return (
            <div className="comic" key={id}>
              <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
              <div className="comic-info">
                <h5>Title: {title}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;