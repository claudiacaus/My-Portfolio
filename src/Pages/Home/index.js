import React from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import "./style.css";
import headerImage from "../../images/img1.jpg";
import strolly from "../../images/strolly.png";
import movieTime from "../../images/movie.png";
import weatherCode from "../../images/weather.png";
import vanGoghWorld from "../../images/vangogh.png";

const Home = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  const work = [
    {
      name: "Strolly App",
      link: " https://hyf-c33-final-project.herokuapp.com",
      imageSrc: strolly,
    },
    {
      name: "Movie Time",
      link: "https://movie-time-react-project.netlify.app",
      imageSrc: movieTime,
    },
    {
      name: "Weather Code",
      link: "https://claudiadewindt.github.io/Weather-code/",
      imageSrc: weatherCode,
    },
    {
      name: "Van Gogh's World",
      link: "https://codepen.io/claudia-cau/full/YzZPvjj",
      imageSrc: vanGoghWorld,
    },
  ];

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="image-container">
            <img src={headerImage} alt="header" className="img-header" />
            <div className="block-background"></div>
          </div>
        </Animator>
        <Animator animation={batch(FadeIn(), Sticky(), MoveOut(-1650, 0))}>
          <div className="name">
            <h2 className="first">Claudia de Windt</h2>
          </div>
        </Animator>
        {/* <Animator animation={batch(FadeIn(), Sticky(), MoveOut(, 0))}>
          <div className="name">
            <h2 lassName="last">Windt</h2>
          </div>
        </Animator> */}

        <Animator animation={batch(FadeIn(), Sticky(), MoveOut(-100, 100))}>
          <div className="position">
            <div></div>
            <h2 lassName="last">Full Stack Web Developer</h2>
          </div>
        </Animator>
      </ScrollPage>

      {/*  page={2} */}

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title">Portfolio</div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="portfolio-content">
            {work?.map((work) => {
              return (
                <a
                  href={work?.link}
                  target="_blank"
                  key={work?.name}
                  rel="noreferrer"
                >
                  <div className="portfolio-card">
                    <div className="portfolio-title">
                      <h3>{work?.name}</h3>
                    </div>
                    <div className="portfolio-image">
                      <img src={work?.imageSrc} alt={work?.name} />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Home;