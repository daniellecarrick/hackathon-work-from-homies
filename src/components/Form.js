import * as React from "react";
import Box from "@mui/material/Box";
import withStyles from "react-jss";
import TextField from "@mui/material/TextField";

const styles = {
  fullWidth: {
    width: "100%",
  },
  flex: {
    display: 'flex'
  }
};
const Form = ({ classes }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className={classes.flex}>
        <p>Contact Info</p>
        <TextField
          id="outlined-number"
          label="First Name"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Last Name"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-address"
          label="Address"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-e-mail"
          label="e-mail"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-phone"
          label="phone"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <p>Submission</p>
        <TextField
          id="outlined-multiline-summary"
          label="Summary"
          multiline
          rows={4}
          defaultValue="In 100 words or less, what problem are you trying to solve?"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-multiline-resources"
          label="Resources"
          multiline
          rows={4}
          defaultValue="What resources do you want from the Condé Nast data team?"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className={classes.fullWidth}
          id="outlined-multiline-static"
          label="Time"
          sx={{ width: "100%" }}
          multiline
          rows={4}
          defaultValue="How much time do you need with the team?"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
};

export default withStyles(styles)(Form);
