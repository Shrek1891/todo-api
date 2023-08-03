import express from 'express';
import cors from 'cors';
import * as dotenv from "dotenv";

import router from './routes/notes';

const port = process.env.PORT || 5001;
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
