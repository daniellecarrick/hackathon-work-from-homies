import React from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import Tourney from "./assets/fonts/Tourney/Tourney-Black.ttf";
import TourneyThin from "./assets/fonts/Tourney/Tourney-Thin.ttf";
import headerImg from "./assets/images/header.jpg";

import { Form, Mentors } from "./components";

const styles = {
  "@font-face": [
    {
      fontFamily: "Tourney",
      src: `url(${Tourney})`,
    },
    {
      fontFamily: "Tourney-Thin",
      src: `url(${TourneyThin})`,
    },
  ],
  container: { fontFamily: "Tourney", textAlign: "center" },
  flex: { display: "flex" },
  h1: {
    fontFamily: "Tourney",
  },
  mentor: { display: "flex" },
  image: { width: "150px", height: "150px" },
  sectionTitle: {
    fontSize: "24px",
    textTransform: "uppercase",
  },
  title: {
    fontFamily: "Tourney",
    fontSize: "24px",
  },
  big: {
    fontSize: "99px",
    fontFamily: "Tourney-Thin",
    textTransform: "uppercase",
  },
  headerText: {
    color: "white",
    textShadow: "1px 1px 5px black",
  },
  section: {
    height: "100vh",
    display: "flex",
    padding: "50px",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Arial",
  },
  intro: {
    background: `linear-gradient(0deg, rgba(50, 50, 50, 0.3), rgba(0, 0, 0, 0.3)), url(${headerImg})`,
    backgroundSize: "cover",
  },
  about: {
    backgroundColor: "white",
    maxWidth: "500px",
  },

  placeholder: {
    backgroundColor: "white",
    margin: "40px",
  },
  button: {
    padding: "15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    borderCollapse: "collapse",
    margin: "20px",
  },

  form: {},
};
const App = ({ classes }) => {
  return (
    <div className={classes.container}>
      <section className={classNames(classes.section, classes.intro)}>
        <div className={classes.headerText}>
          <div className={classes.placeholder}> &nbsp;</div>
          <h1 className={classes.h1}>
            Now accepting applications for the
            <br />
            <span className={classes.big}>
              Conde Nast <br />
              Data Grant
            </span>
            <br />
            2022's theme is Women's Empowerment
          </h1>
          <div className={classes.placeholder}> &nbsp;</div>
        </div>

        <div>
          <button className={classes.button}>Apply</button>
          <button className={classes.button}>Learn More</button>
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.about}>
          <h1 className={classes.title}>Who should apply?</h1>
          <p>
            Condé Nast is looking to provide data tools and expertise to
            non-profit organizations working on causes that empower women. The
            ideal candidate would have existing and available data but need help
            analysing, processing, visualizing or sharing it.
          </p>
          <h1 className={classes.title}>
            What does the Condé Nast Data Grant provide?
          </h1>
          <p>
            The grant provides one week of consulting hours from up to 5 members
            of the Condé Nast Data Team. The Team includes data engineers, data
            scientists, analysts, web developers and machine learning
            developers. Please indicate which roles you think would be most
            helpful to your organization in the application.
          </p>
          <p>
            Apply for Access to Condé Nast's award-winning team of data
            scientists, data engineers and web developers.
          </p>
        </div>
      </section>
      <Mentors />
      {/* <section className={classes.section}>
        <h1>How to Apply</h1>
        <p>Fill out the form with .... and .... and ....</p>
        <p>Fill out the form with .... and .... and ....</p>
      </section> */}
      <section className={classNames(classes.section, classes.form)}>
        <h1>Form</h1>
        <Form />
      </section>
    </div>
  );
};

export default withStyles(styles)(App);
