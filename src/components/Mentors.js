import React from "react";
import withStyles from "react-jss";
import narcisa from "../assets/images/narcisa.png";
import danielle from "../assets/images/danielle.png";

const styles = {
  mentor: {
    display: "flex",
    flex: "30%",
    flexDirection: "column",
    margin: "0 20px 20px 0",
  },
  name: { fontWeight: "bold" },
  image: { width: "100%", height: "200px" },
  meet: { display: "flex", flexWrap: "wrap" },
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
    text: "I enjoy using my analytical thinking and problem solving skills to contribute to better decision-making processes. My appetite for details leads me to very exciting investigations and interesting findings every day.",
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
      <h1>Meet your Mentors</h1>
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
              <p>
                <span className={classes.name}>
                  {mentor.name}, {mentor.title}
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
