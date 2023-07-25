import { useState } from "react";
import classes from "./Home.module.css";

const tourArr = [
  { date: "JUL16", city: "DETROIT, MI", theater: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL19", city: "TORONTO,ON", theater: "BUDWEISER STAGE" },
  { date: "JUL22", city: "BRISTOW, VA", theater: "JIGGY LUBE LIVE" },
  { date: "JUL29", city: "PHOENIX, AZ", theater: "AK-CHIN PAVILION" },
];
const Home = () => {
  const [movies, setMovies] = useState([]);
  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingtext: movieData.opening_crawl,
        releasedate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
  }
  return (
    <>
      <div className={classes.container}>
        <section className={classes.upperSec}>
          <button className={classes.latestBtn}>Get Our Latest Album</button>
          <button className={classes.playBtn}>►</button>
        </section>
        <section className={classes.lowerSec}>
          <h1>TOURS</h1>
          {tourArr.map((ele) => (
            <div>
              <span className={classes.date}>{ele.date}</span>
              <span className={classes.city}>{ele.city}</span>
              <span className={classes.theater}>{ele.theater}</span>
              <button>BUY TICKETS</button>
            </div>
          ))}
        </section>


        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>
          <ul>
            {movies.map((movie) => (
              <li>
                <h2>{movie.title}</h2>
                <h3>{movie.releasedate}</h3>
                <p>{movie.openingtext}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
