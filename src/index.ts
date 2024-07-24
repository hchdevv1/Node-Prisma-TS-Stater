import express ,{ Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config()
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { env } from "process";



const app: Express =express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit: "15mb"}));

app.get( "/",( _: Request ,res :Response )=>{
    return res.status(200).json({
        CompanyName: process.env.COMPANY_NAME,
        message :"Hello API..."});
});

const port =process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is runinig port : `+port);
})