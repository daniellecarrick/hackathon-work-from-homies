import React from "react";
import withStyles from "react-jss";
import narcisa from "../assets/images/narcisa.png";
import danielle from "../assets/images/danielle.png";
import anuj from "../assets/images/anuj.png";

const styles = {
  mentor: {
    display: "flex",
    flex: "30%",
    flexDirection: "column",
    margin: "0 20px 20px 0",
  },
  name: { fontWeight: "bold", fontSize: "14px" },
  image: { width: "100%", height: "200px" },
  meet: { display: "flex", flexWrap: "wrap" },
  title: { fontFamily: "Tourney", fontSize: "24px" },
  mentorText: { fontSize: "12px" },
  section: {
    display: "flex",
    padding: "50px",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Arial",
    backgroundColor: "#efefef",
  },
};

const data = [
  {
    name: "Narcisa Iancu",
    image: narcisa,
    title: "Business Analyst",
    text: "I enjoy using my analytical thinking and problem solving skills to contribute to better decision-making processes. My appetite for details leads me to very exciting investigations and interesting findings every day.",
  },
  {
    name: "Danielle Carrick",
    image: danielle,
    title: "Front-End Developer",
    text: "I love building online experiences that surprise and delight users.",
  },
  {
    name: "Anuj Kumar Jha ",
    image: anuj,
    title: "Machine Learning Engineer",
    text: "I have my expertise over both predictive modelling and best software practices used for MLOps.",
  },
  {
    name: "Narcisa Iancu",
    image: narcisa,
    title: "Business Analyst",
    text: "I enjoy using my analytical thinking and problem solving skills to contribute to better decision-making processes. My appetite for details leads me to very exciting investigations and interesting findings every day.",
  },
  {
    name: "Narcisa Iancu",
    image: narcisa,
    title: "Business Analyst",
    text: "I enjoy using my analytical thinking and problem solving skills to contribute to better decision-making processes. My appetite for details leads me to very exciting investigations and interesting findings every day.",
  },
];

const Mentors = ({ classes }) => {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Meet your Mentors</h1>
      <div className={classes.meet}>
        {data.map((mentor) => {
          return (
            <div className={classes.mentor}>
              <div
                className={classes.image}
                style={{
                  backgroundImage: `url(${mentor.image})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p className={classes.mentorText}>
                <span className={classes.name}>
                  {mentor.name}
                  <br /> {mentor.title}
                </span>
                <br />
                {mentor.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default withStyles(styles)(Mentors);
