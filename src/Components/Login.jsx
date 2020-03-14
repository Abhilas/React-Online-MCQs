import React, { Fragment, useState } from "react";
import { Paper, Grid, TextField } from "@material-ui/core";

export default function Login(props) {
  const [usrName, setUsrName] = useState("");
  const handleChange = event => {
    const { value } = event.target;
    setUsrName(value);
  };

  return (
    <Fragment>
      <Paper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="usrName"
              label="Username/Email"
              variant="outlined"
              value={usrName}
              onChange={handleChange}
              helperText="Incorrect entry."
              error={false}
            />
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
}
