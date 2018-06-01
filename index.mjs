// const express = require('express');
import express from 'express';
import welcome from './hello';

const app = express();

// app.get('/', (req,res) => {
//   res.send(add(5,5).toString());
// });

app.get('/', (req,res) => {
  res.send(welcome);
});

const port = 5000;

app.listen(port, () => console.log(`server stared on port ${port}`));