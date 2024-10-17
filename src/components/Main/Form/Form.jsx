import React, { useContext, useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

import useStyle from "./style";
import { ExpenseTrackerContext } from "../../../Context/Context";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/Categories.js";
import formatDate from "../../../utils/FormatDate.js";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

function Form() {
  const classes = useStyle();
  const [formData, setFormData] = useState(initialState);

  const { addTransaction } = useContext(ExpenseTrackerContext);

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };

    addTransaction(transaction);
    setFormData(initialState);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((category) => (
              <MenuItem value={category.type} key={category.type}>
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type="number"
          label="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type="date"
          label="Date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        fullWidth
        color="primary"
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
}

export default Form;
