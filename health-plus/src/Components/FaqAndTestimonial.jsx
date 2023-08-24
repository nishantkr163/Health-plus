import React from "react";
import { Carousel } from "react-carousel-minimal";
import style from "./FaqAndTestimonial.module.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";


const FaqAndTestimonial = () => {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1607962815971-449d73b02eb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      caption:
        "I've seen incredible progress in my fitness journey ever since I joined Health+. The trainers are knowledgeable, supportive, and have helped me achieve my goals faster than I thought possible.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590556409454-198422ea5d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      caption:
        "Being part of Health+ has been a game-changer for me. The trainers' expertise and dedication have turned my fitness goals into a reality. The support I've received here is unparalleled, making every step of my journey enjoyable and rewarding.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      caption:
        "The trainers on this platform are true professionals who genuinely care about your success. Their personalized guidance and expert advice have transformed my approach to health and fitness.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      caption:
        "I'm amazed by the variety of workouts and fitness programs available on this website. The trainers bring fresh ideas to every session, making exercise exciting and effective. It's like having a personal coach at my fingertips.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1608138278561-4b1ade407411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      caption:
        "The trainers here understand that everyone's fitness journey is unique. Their ability to adapt workouts to my fitness level and goals has made me more motivated and confident in my pursuit of a healthier lifestyle.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1583500178689-665d1f77e67d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
      caption:
        "Joining this platform was one of the best decisions I've made for my health. The trainers have not only helped me transform physically but have also boosted my self-confidence and overall well-being.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=499&q=80",
      caption:
        "The trainers here are more than just coaches; they're mentors who genuinely invest in your success. Their constant support, nutritional guidance, and effective workouts have made this website an essential part of my fitness routine.",
    },
  ];

  const captionStyle = {
    fontSize: "20px",
    padding: "0 20px",
    fontFamily: "Oswald",
    fontWeight: "bold",
    textShadow: "0px 1px 10px rgba(0, 0, 0, 1),0px 0px 18px rgba(0, 0, 0, 1)",
  };
  const slideNumberStyle = {};

  return (
    <div className={style.mainFaqDiv}>
      <div
        style={{
          width: "45%",
        }}
      >
        <Typography mb="20px"
          textAlign="center"
          fontWeight="bold"
          fontFamily="Oswald"
          color="#DB2A24"
          variant="h3">USER EXPERIENCES</Typography>

        <Carousel
          data={data}
          time={4000}
          width="600px"
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
          thumbnails={false}
          thumbnailWidth="100px"
          thumbnailHeight="10px"
          style={{
            textAlign: "center",
            maxWidth: "100%",
            maxHeight: "500px",
            margin: "auto",
          }}
        />
      </div>

      <div className={style.accordion}>
        <Typography
          mb="20px"
          textAlign="center"
          fontWeight="bold"
          fontFamily="Oswald"
          color="#DB2A24"
          variant="h3"
        >
          FAQ SECTION
        </Typography>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography fontFamily="Oswald">1. What is Health+?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Health+ is a comprehensive online fitness platform designed to
              empower individuals on their health journey. We offer expert
              guidance, a range of workouts, personalized training plans, and a
              vibrant community that supports your goals.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography fontFamily="Oswald">2. How do I get started?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Signing up is easy! Create an account, choose your fitness goals,
              and explore our library of workouts, resources, and challenges.
              You'll have everything you need to kickstart your fitness journey.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography fontFamily="Oswald">3. Are the trainers qualified?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, our trainers are certified fitness experts with years of
              experience. They're dedicated to providing personalized guidance,
              helping you maximize your efforts and achieve remarkable results.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography fontFamily="Oswald">4. What types of workouts are available?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Health+ offers a diverse array of workouts, including strength
              training, cardio routines, yoga sessions, and more. Whether you're
              a beginner or an experienced athlete, we have options to suit your
              preferences.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography fontFamily="Oswald">5. Is nutritional guidance provided?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we offer nutritional support through expert advice, meal
              plans, and dietary tips. Achieving your fitness goals involves a
              holistic approach, and we're here to guide you every step of the
              way.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography fontFamily="Oswald">6. Can I connect with other users?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, our community is a vital part of Health+. Engage with fellow
              members, share your successes, and find motivation within a
              supportive network of individuals who are on similar journeys.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography fontFamily="Oswald">7. What types of workouts are available?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Health+ caters to a wide range of fitness preferences. You'll find
              various types of workouts, including: Strength training for
              building muscle and increasing endurance. Yoga and flexibility
              exercises to enhance balance and relaxation. Cardiovascular
              workouts to improve heart health and stamina. Specialized programs
              designed for weight loss, muscle gain, and overall fitness.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqAndTestimonial;
