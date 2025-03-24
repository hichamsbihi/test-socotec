import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import configureServer from './config/server';
import userRoutes from './routes/userRoutes';

//loading environnement vars
dotenv.config();

// connect to DB 
connectDB();

// init express 
const app = express();

// Routes
app.use('/api/users', userRoutes);

//passing middlewares
configureServer(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`servers running on  ${PORT}`);
})