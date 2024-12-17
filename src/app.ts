import express from 'express';
import { config } from 'dotenv';
import { log } from 'console';
import mongoConnect from './database/connection'
import { createRouter, deleteRouter, readRouter, updateRouter } from './routers';


config();


const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

mongoConnect();

app.use('/create',createRouter);
app.use('/read', readRouter);
app.use('/update',updateRouter);
app.use('/delete',deleteRouter)


app.listen(port,()=>{
    log(`Server Runing at http://localhost:${port}`);
});

