'use strict';

const port = process.env.PORT || 5000;

const express = require('express');

const { setupTables } = require('./utiles/setupTables.js');
const { userRouter } = require('./routers/user.js');
const { expenseRouter } = require('./routers/expense.js');

const app = express();

setupTables();

app.use(express.json());

app.use('/', (req, res) => {
  res.send('Hello from Expense server');
});

app.use('/users', userRouter);

app.use('/expenses', expenseRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server started');
});
