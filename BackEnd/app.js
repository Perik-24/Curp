import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./controllers/user.controller.js";
dotenv.config()

mongoose.connect(process.env.url_db)

.then(() => {
    console.log('CONEXION EXITOSA');
  })
  .catch((err) => {
    console.error('ERROR AL CONECTAR A LA BASE DE DATOS(NO JALA)', err);
  });

  const app = express()
  app.use(cors())
  app.listen(4000, () => {
    console.log('La API esta corriendo')
  })

  test()