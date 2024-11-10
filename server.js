import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";  //file import krte time extension bhi lgta hai
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import cors from 'cors'//configure env
import productRoutes from "./routes/productRoutes.js"
dotenv.config();

//database config
connectDB();

//REST OBJECTS
const app=express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);

//rest api
app.get('/',(req,res) => {
    // res.send({
    //    // message:'Welcome to Ecommerce app',
    // });
    res.send("<h1>Welcome to ecommerce app</h1>");
});

//port
const PORT= process.env.PORT || 8080 ; //iska mtlb hai agr dotenv ke file mei port mei koi chnges ya mentioned hua kbhi toh by default 8080 port lelo

//app listen(app run)
app.listen(PORT,() => {
    console.log(`Server Running on ${PORT}`.bgCyan.white);
})