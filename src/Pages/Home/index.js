import React from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  MoveIn,
} from "react-scroll-motion";
import "./style.css";
import headerImage from "../../images/img1.jpg";
import strolly from "../../images/strolly.png";
import movieTime from "../../images/movie.png";
import weatherCode from "../../images/weather.png";
import vanGoghWorld from "../../images/vangogh.png";
import laptop from "../../images/img2.jpg";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

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

      {/*  section={2} */}

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title">Projects</div>
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

      {/*  section={3} */}

      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title about">About me</div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
          <div className="background-image-container">
            <img src={laptop} alt="laptop" />
            <div className="block-background"></div>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
          <div className="details">
            <h2 className="greeting">Hello</h2>
            <p className="bio">
              I am a Full Stack Web Developer with a passion for building web
              applications. I recently graduated from the HackYourFuture
              Bootcamp and I am fascinated by the creative part of web
              development.
            </p>
          </div>
        </Animator>
      </ScrollPage>

      {/*  section={4} */}

      <ScrollPage page={5}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title contact">Contact </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={6}>
        <div
          style={{
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Animator animation={MoveIn(1000, 0)}>
            <a
              href="https://www.linkedin.com/in/claudiadewindt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin style={{ fontSize: "60px", marginRight: "80px" }} />
            </a>
          </Animator>
          <Animator animation={MoveIn(10000, 0)}>
            <a
              href="https://github.com/claudiadewindt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithubSquare
                style={{ fontSize: "60px", marginRight: "80px" }}
              />
            </a>
          </Animator>
          <Animator animation={MoveIn(-1000, 0)}>
            <a
              href="mailto:caucrah@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope style={{ fontSize: "60px" }} />
            </a>
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Home;
