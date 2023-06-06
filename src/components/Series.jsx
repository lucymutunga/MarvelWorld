
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Series = () => {
    const [series, setSeries] = useState([])

    const apiURL = `https://gateway.marvel.com:443/v1/public/series?limit=60&offset=30&apikey=0fc969e9198cb9b9859e37e527e0cfb1`;

    const getMarvelSeries = async () => {
        try {
            const res = await axios.get(apiURL);
            const data = res.data;
            const seriesData = data?.data?.results;
            setSeries(seriesData)
            console.log(seriesData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMarvelSeries()
    }, [])

    return (
        <div className="series">
            <h4>Marvel Series</h4>
            <div className="series-list">
                {series.map((serie) => {
                    const { id, title, thumbnail } = serie;
                    return (
                        <div className='serie' key={id}>
                            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
                            <div className='serie-info'>
                                <h5>Serie: {title}</h5>
                            </div>
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )
}

export default Series
