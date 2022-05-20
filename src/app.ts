import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

//initialize express
const app = express();

//settings
app.set("port", 3000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response): Response => {
  return res.send(`Api is at http://localhost:${app.get("port")}`);
});

export default app;
