import mongoose from "mongoose";
const USERNAME = 'weberlabsinfo'; 
const PASSWORD = 'Neel1234';
const DB_NAME = 'neel'; // Replace with your actual database name

// Construct the connection string with the username, password, and database name
// const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.sxpngpr.mongodb.net/${DB_NAME}`;
// let connectoin = mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.sxpngpr.mongodb.net/${DB_NAME}`) ;
const connectoin = mongoose.connect(`mongodb+srv://surjeshyadav:m275os2o9W6t3c5b@cluster0.25agdww.mongodb.net/`)

export default connectoin ;