import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2"; // Keep only this import for Doughnut

import useStyles from "./style";
import useTransactions from "../../useTransaction";
Chart.register(ArcElement);

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
