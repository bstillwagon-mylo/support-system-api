import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { defaultRoute } from './routes';


const app = express();
dotenv.config(); 

// declare a route with a response
app.use(express.static('public'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use('/', defaultRoute)

// start the server
app.listen(process.env.PORT || 3001, () => {
    console.log(`server running`);
  });