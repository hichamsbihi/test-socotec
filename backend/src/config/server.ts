import express from 'express';
import cors from 'cors';



const configureServer = (app: express.Application): void => {
  // manage Middlewares
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  };

export default configureServer;