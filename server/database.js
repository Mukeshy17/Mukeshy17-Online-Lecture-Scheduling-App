const mongoose = require("mongoose");
const URI = `mongodb+srv://mukesh:${process.env.password}@jl1dqhm.mongodb.net/mern-auth?retryWrites=true&w=majority&appName=LectureScheduler`;

async function connection() {
  return await mongoose
    .connect(URI, {
      connectTimeoutMS: 30000,
    })
    .then(() => {
      console.log("Database Connected!!");
    })
    .catch((err) => {
      if (err) throw err;
    });
}

module.exports = { connection };
