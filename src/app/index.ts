import express from 'express';
import hosting from '../hosting';

const app = express();

// View hosting
app.use('/', hosting);

export default app;
