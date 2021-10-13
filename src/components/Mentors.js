import React from "react";
import withStyles from "react-jss";
import narcisa from "../assets/images/narcisa.png";
import danielle from "../assets/images/danielle.png";

const styles = {
  mentor: { display: "flex" },
  image: { width: "150px", height: "150px" },

  section: {
    height: "100vh",
    display: "flex",
    padding: "50px",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Arial",
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
      <div className={classes.meet}>
        <h1>Meet your Mentors</h1>
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
                </span>{" "}
                <br />I enjoy using my analytical thinking and problem solving
                skills to contribute to better decision-making processes. My
                appetite for details leads me to very exciting investigations
                and interesting findings every day.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default withStyles(styles)(Mentors);
