import React, { useEffect, useState } from 'react';
import jsonData from '../feed/sample.json';
import { useHistory } from 'react-router-dom';

const MoviesSeries = () => {
    const history = useHistory();
    const path = history.location.pathname;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        // Remove data release year >=2010
        const filterDataByDate = jsonData.entries.filter((entry) => entry.releaseYear >= 2010);
        // Sorted by the title attribute value in ascending alphanumeric order
        filterDataByDate.sort((a, b) => a.title.localeCompare(b.title));
        if (path === '/movies') {
            const filterMovies = filterDataByDate.filter((entry) => entry.programType === 'movie');
            // Keep first 21 entries
            const finalDataMovies = filterMovies.length > 21 ? filterMovies.slice(0, 21) : filterMovies;
            setData(finalDataMovies);
        } else if (path === '/series') {
            const filterSeries = filterDataByDate.filter((entry) => entry.programType === 'series');
            // Keep first 21 entries
            const finalDataSeries = filterSeries.length > 21 ? filterSeries.slice(0, 21) : filterSeries;
            setData(finalDataSeries);
        } else {
            setError('Oops, something went wrong...');
        }
        setIsLoading(false);
    }, [path]);

    console.log(data.length);
    return (
        <div className="movies-series-container">
            <div className="movies-series-header">
                <h2>{path === '/movies' ? 'Popular Movies' : path === '/series' ? 'Popular Series' : null}</h2>
            </div>
            <div className="movies-series-data">
                {error ? (
                    <span>{error}</span>
                ) : isLoading ? (
                    <span>Loading...</span>
                ) : (
                    <div>
                        {data.map((item, index) => {
                            return (
                                <div className="data-list" key={index}>
                                    <div>
                                        <img src={item.images['Poster Art'].url} alt={item.title} />
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoviesSeries;
