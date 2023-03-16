import { Application } from "express";
import convertMiddleware from "./convert";
import staticMiddleware from "./static";


const middlewares = [convertMiddleware, staticMiddleware];

export default function chainMiddlewares(app: Application) {
  middlewares.forEach(middleware => middleware(app));
}