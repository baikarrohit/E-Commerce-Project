import classes from "./Home.module.css";

const tourArr = [
  { date: "JUL16", city: "DETROIT, MI", theater: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL19", city: "TORONTO,ON", theater: "BUDWEISER STAGE" },
  { date: "JUL22", city: "BRISTOW, VA", theater: "JIGGY LUBE LIVE" },
  { date: "JUL29", city: "PHOENIX, AZ", theater: "AK-CHIN PAVILION" },
];
const Home = () => {
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
      </div>
    </>
  );
};

export default Home;
