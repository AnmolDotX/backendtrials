import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';
dotenv.config({
    path : '../.env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`SERVER is running at PORT : ${process.env.PORT}`);
    });
    app.on('error', (err)=>{
        console.log(`ERROR connecting with the app server : ${err}`);
    });
})
.catch((err)=>{
    console.log("MongoDB connection failed !!! : ", err.message);
})