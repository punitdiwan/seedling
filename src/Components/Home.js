import React from "react";
import Banner from "./Banner";
import ReactCardSlider from "./ReactCardSlider";

// import ReactCardSlider from 'react-card-slider-component';
// import { Carousel } from 'react-carousel-minimal';
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
const Home = () => {
  const sliderClick = (slider) => {};

  const slides = [
    {
      image: "./images/cr1.jpg",
      title: "Merry Christmas",
      description: "25 December",
      clickEvent: sliderClick,
    },
    {
      image: "/images/new1.jpg",
      title: "Happy New Year",
      description: "01 January ",
      clickEvent: sliderClick,
    },

    {
      image: "./images/mk.jpg",
      title: "Happy Makar sankranti",
      description: "14 January ",
      clickEvent: sliderClick,
    },

    {
      image: "./images/rep.jpg",
      title: "Republic Day",
      description: "26 January",
      clickEvent: sliderClick,
    },
    {
      image: "./images/yoga1.jpeg",
      title: "Celebrating Yoga Day",
      description: "21 june",
      clickEvent: sliderClick,
    },
    {
      image: "./images/g33.jpeg",
      title: "World Art Day",
      description: "15 April ",
      clickEvent: sliderClick,
    },
    {
      image: "./images/fa.jpeg",
      title: "Forest Activity",
      description: "21 March",
      clickEvent: sliderClick,
    },
    {
      image: "./images/cul.jpeg",
      title: "Cultural Activity",
      description: "yearly",
      clickEvent: sliderClick,
    },
  ];
  return (
    <>
      <Banner />

      <div className="content_box">
        <div className="first_box bxx">
          <div className="bx1">
            <p>About</p>
            <h1>Seedling School Bhopal</h1>
          </div>
          <div className="image_boxAb img-school" >
            <img src="./images/schoolb.jpeg" alt="" />
          </div>

          <div className="para-content">
            <p>              
              Seedling School is based in city of lake Bhopal. Seedling School is recognized as a developmentally enriching learning space, making learning fun for children. Seedling School (Play Group Section) was founded and established in 1998.<Link to="/ourSchool">read more</Link>
            </p>
          </div>
        </div>
        <div className="second_box bxx">
          <div className="bx1">
            <p>Message</p>
            <h1>Director</h1>
          </div>
          <div className="image_boxAb img-principle">
            <img src="./images/Director.jpeg" alt="" />
          </div>
          <div className="para-content">
            <p>
            Dear Parent & Students, It gives me great pleasure to welcome you to Seedling School. The school is committed to inculcating in all our students; strong ethical valued of integrity respect.  
            <Link to="/director"> read more</Link>
            </p>
          </div>
        </div>
        <div className="second_box bxx">
          <div className="bx1">
            <p>Message</p>
            <h1>Principal</h1>
          </div>
          <div className="image_boxAb img-principle">
            <img src="./images/Principal.jpeg" alt="" />
          </div>
          <div className="para-content">
            <p>
              Welcome to SSB, a home built on decades of value imbued
              traditions. As educators, we understand that children learn more
              from what you are and what you do than what you say. <Link to="/principal">read more</Link>
            </p>
          </div>
        </div>
        <div className="third_box bxx">
          <div className="bx1">
            <p>Latest From</p>
            <h1>Notice Board</h1>
          </div>

          <div className="image_boxAbc">
            <div className="animatinct" style={{ padding: "5px" }}>
              <p>1. Class Prep Admission Guideline 2023-24</p>
              <p>2. School Transport Arrangement</p>
              {/* <p>3. School Transport Arrangement</p>
              <p>4. School Transport Arrangement</p>
              <p>5. School Transport Arrangement</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="third_content_box">
        <div className="academic_planner">
          <div className="accontent">
            <p>Academic Planner</p>
          </div>
          <div className="imgggbox1">
            <div className="igg"></div>
          </div>
        </div>
        <div className="academic_planner">
          <div className="accontent">
            <p>Class Room</p>
          </div>
          <div className="imgggbox1 imgggbox12">
            <div className="igg"></div>
          </div>
        </div>
        <div className="academic_planner">
          <div className="accontent">
            <p>School Magazine</p>
          </div>
          <div className="imgggbox1 imgggbox13">
            <div className="igg igg1">
              <img src="./images/25.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="fourth_content_box">
        <div className="fouthmain">
          <div className="fourthOne">
            <div className="ffone">
              <h3>Photo Gallery</h3>
            </div>
            <div className="ffslider">
              <Carousel className="abcd">
                <Carousel.Item className="jhk">
                  <img
                    className="d-block"
                    src="./images/1.jpeg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item className="jhk">
                  <img
                    className="d-block"
                    src="./images/2.jpeg"
                    alt="Second slide"
                  />
                </Carousel.Item>

                <Carousel.Item className="jhk">
                  <img
                    className="d-block"
                    src="./images/3.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item className="jhk">
                  <img
                    className="d-block"
                    src="./images/4.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item className="jhk">
                  <img
                    className="d-block"
                    src="./images/5.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item className="jhk">
                  <img
                    className="d-block"
                    src="./images/6.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item className="jhk">
                  <img
                    className="d-block"
                    src="./images/7.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item className="jhk">
                  <img
                    className="d-block"
                    src="./images/8.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item className="jhk">
                  <img
                    className="d-block"
                    src="./images/9.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item className="jhk">
                  <img
                    className="d-block"
                    src="./images/10.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="ffbutton">
            <Link to="/gallery" ><button>View More</button></Link>  
            </div>
          </div>
          <div className="fourthOne">
            <div className="ffone">
              <h3>Video Gallery</h3>
            </div>
            <div className="ffslider">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YTt0fz55NoA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="ffbutton">
               <a href="https://www.youtube.com/@seedlingsschoolbhopal6149" target="_blank"><button>View More</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="cardSliderimage">
        <div className="latest">
          <p className="lnews">Latest From</p>
          <h2 className="newsevent">News & Events</h2>
        </div>
        <ReactCardSlider slides={slides} />
        <Carousel className="slidercarouse" indicators={false}>
          <Carousel.Item className="kppp">
            <img
              className="d-block"
              src="./images/cr1.jpg"
              alt="Second slide"
            />
            <h4>Merry Christmas</h4>
            <h6>25 December</h6>
          </Carousel.Item>
          <Carousel.Item className="kppp">
            <img
              className="d-block"
              src="./images/new1.jpg"
              alt="First slide"
            />
            <h4>Happy New Year</h4>
            <h6>1 January</h6>
          </Carousel.Item>
          <Carousel.Item className="kppp">
            <img className="d-block" src="./images/mk.jpg" alt="Third slide" />
            <h4>Makar Sankranti</h4>
            <h6>14 January </h6>
          </Carousel.Item>
          <Carousel.Item className="kppp">
            <img className="d-block" src="./images/rep.jpg" alt="Third slide" />
            <h4>Republic Day</h4>
            <h6>26 January</h6>
          </Carousel.Item>
          
         
          
        </Carousel>
      </div>
    </>
  );
};

export default Home;
