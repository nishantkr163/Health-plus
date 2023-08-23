import React from "react";
import style from "./Home.module.css";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Carousel } from 'react-carousel-minimal';


export const Home = () => {

  const data = [
    {
      image: "https://images.unsplash.com/photo-1607962815971-449d73b02eb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      caption: "I've seen incredible progress in my fitness journey ever since I joined this health fitness website. The trainers are knowledgeable, supportive, and have helped me achieve my goals faster than I thought possible."
    },
    {
      image: "https://images.unsplash.com/photo-1590556409454-198422ea5d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "The trainers on this platform are true professionals who genuinely care about your success. Their personalized guidance and expert advice have transformed my approach to health and fitness."
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "I'm amazed by the variety of workouts and fitness programs available on this website. The trainers bring fresh ideas to every session, making exercise exciting and effective. It's like having a personal coach at my fingertips."
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "The trainers here understand that everyone's fitness journey is unique. Their ability to adapt workouts to my fitness level and goals has made me more motivated and confident in my pursuit of a healthier lifestyle."
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Joining this platform was one of the best decisions I've made for my health. The trainers have not only helped me transform physically but have also boosted my self-confidence and overall well-being."
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "The trainers here are more than just coaches; they're mentors who genuinely invest in your success. Their constant support, nutritional guidance, and effective workouts have made this website an essential part of my fitness routine."
    }
  ];

  const captionStyle = {
    fontSize: '16px',
    fontFamily: "Oswald",
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    
  }

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.divOne}>
          <div className={style.oneContent}>
            <Typography
              className={style.title}
              variant="h5"
              fontFamily="Oswald"
              fontWeight="bold"
            >
              Meet Our Professional Trainers
            </Typography>
            <Typography
              className={style.subTitle}
              variant="body1"
              fontFamily="Oswald"
              fontWeight="bold"
            >
              Expert Guidance for Your Fitness Journey
            </Typography>
          </div>
        </div>
        <div className={style.divTwo}>
          <div className={style.twoContent}>
            <Typography
              className={style.title}
              variant="h5"
              fontFamily="Oswald"
              fontWeight="bold"
            >
              Premium Health Solutions
            </Typography>
            <Typography
              className={style.subTitle}
              variant="body1"
              fontFamily="Oswald"
              fontWeight="bold"
            >
              Where Quality Meets Wellness
            </Typography>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography
        fontWeight="bold"
        className={style.class}
        fontFamily="Oswald"
        color="#DB2A24"
        variant="h3"
      >
        CHECK OUR CLASSES SCHEDULE
      </Typography>

      <div className={style.schedule}>
        <div className={style.days}>
          <div>
            <AccessTimeIcon fontSize="large" style={{ color: "white" }} />
          </div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thrusday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
        <div className={style.eight}>
          <div className={style.time}>8:00 AM</div>
          <div className={style.activites}>Weight Lifting</div>
          <div className={style.activites}>Aerobics</div>
          <div className={style.activites}></div>
          <div className={style.activites}>Power Yoga</div>
          <div className={style.activites}>Cardio</div>
          <div className={style.activites}>Weight Lifting</div>
        </div>
        <div className={style.ten}>
          <div className={style.time}>10:00 AM</div>
          <div className={style.activites}>Cardio</div>
          <div className={style.activites}>Power Yoga</div>
          <div className={style.activites}></div>
          <div className={style.activites}>Aerobics</div>
          <div className={style.activites}>Weight Lifting</div>
          <div className={style.activites}>Power Yoga</div>
        </div>
        <div className={style.twelve}>
          <div className={style.time}>12:00 PM</div>
          <div className={style.activites}>Power Yoga</div>
          <div className={style.activites}>Weight Lifting</div>
          <div className={style.activites}>Zumba Dance</div>
          <div className={style.activites}></div>
          <div className={style.activites}></div>
          <div className={style.activites}>Aerobics</div>
        </div>
        <div className={style.five}>
          <div className={style.time}>5:00 PM</div>
          <div className={style.activites}></div>
          <div className={style.activites}>Power Yoga</div>
          <div className={style.activites}>Cardio</div>
          <div className={style.activites}>Zumba Dance</div>
          <div className={style.activites}>Weight Lifting</div>
          <div className={style.activites}>Aerobics</div>
        </div>
        <div className={style.seven}>
          <div className={style.time}>7:00 PM</div>
          <div className={style.activites}>Zumba Dance</div>
          <div className={style.activites}>Cardio</div>
          <div className={style.activites}>Power Yoga</div>
          <div className={style.activites}>Weight Lifting</div>
          <div className={style.activites}>Aerobics</div>
          <div className={style.activites}></div>
        </div>
      </div>

      <Typography
        fontWeight="bold"
        className={style.class}
        fontFamily="Oswald"
        color="#DB2A24"
        variant="h3"
      >
        OUR PROGRAMS
      </Typography>

      <div className={style.program}>
        <div className={style.oneP}></div>
        <div className={style.twoP}>
          <h1 className={style.programTitle}>Cardio</h1>
        </div>
        <div className={style.threeP}>
          <h1 className={style.programTitle}>Live Yoga Classes</h1>
        </div>
        <div className={style.fourP}></div>
        <div className={style.fiveP}>
          <h1 className={style.programTitle}>Zumba</h1>
        </div>
      </div>
  
      <div>
        <div style={{
            padding: "0 20px",
            width : "40%"
          }}>
            <Carousel
              data={data}
              time={5000}
              width="400px"
              height="400px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "70%",
                maxHeight: "500px",
                margin: "auto",
              }}
            />
          </div>
        
        <div className={style.faq}>
        
        </div>      
      </div>
      
    </>
  );
};
