import mongoose from "mongoose";

mongoose
    .connect(process.env.DATABASE)
    .then((db) => console.log('DB is connected'))
    .catch((err) => console.log('Error in conection', err))