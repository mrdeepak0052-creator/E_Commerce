// import mongoose from "mongoose";
// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log("DB connected")
//     } catch (error) {
//         console.log("DB error")
//     }
    
// }
// export default connectDb



import dns from "node:dns";
import mongoose from "mongoose";

// DNS configuration
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URL
    );

    console.log("MongoDB Connected:", conn.connection.host);

  } catch (error) {
    console.log("MongoDB Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
