import express from "express";
import cors from "cors";

export const middlewares = [
  express.json(),
  express.urlencoded({ extended: false }),
  cors({ 
    origin: [
      "http://localhost:3000",
      "https://www.freecodecamp.org"
    ],
    credentials: true,
    optionsSuccessStatus: 200
  })
]