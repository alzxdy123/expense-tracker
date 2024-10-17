import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
} from "@material-ui/core";

import Form from "./Form/Form";
import List from "./Form/List/List";
import useStyle from "./style";

function Main() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Poweres by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balence
        </Typography>
        <Typography
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
          variant="subtitle1"
        >
          Test
        </Typography>
        <Divider />
        <Form />
      </CardContent>

      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List></List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
