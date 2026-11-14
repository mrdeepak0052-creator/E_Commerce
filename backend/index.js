// import express from 'express'
// import dotenv from 'dotenv'
// import connectDb from './config/db.js'
// import cookieParser from 'cookie-parser'
// import authRoutes from './routes/authRoutes.js'
// dotenv.config()
// import cors from "cors"
// import userRoutes from './routes/userRoutes.js'
// import productRoutes from './routes/productRoutes.js'
// import cartRoutes from './routes/cartRoutes.js'
// import orderRoutes from './routes/orderRoutes.js'

// let port = process.env.PORT || 6000

// let app = express()

// // app.use(cors({
// //  origin:["https://e-commerce-frontend-h8st.onrender.com" ,"https://e-commerce-admin-hftw.onrender.com"],
// //  credentials:true
// // }))
// app.use(express.json());
// app.use(cookieParser());

// app.use(cors(corsOptions));

// const allowedOrigins = [
//   "https://e-commerce-frontend-h8st.onrender.com",
//   "https://e-commerce-admin-hftw.onrender.com"
// ];

// const corsOptions = {
//   origin: allowedOrigins,
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// };

// app.use(cors(corsOptions));


// app.use("/api/auth",authRoutes)
// app.use("/api/user",userRoutes)
// app.use("/api/product",productRoutes)
// app.use("/api/cart",cartRoutes)
// app.use("/api/order",orderRoutes)




// app.listen(port,()=>{
//     console.log("Hello From Server")
//     connectDb()
// })


import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

const port = process.env.PORT || 6000

const app = express()

// Allowed frontend domains
const allowedOrigins = [
    "https://e-commerce-frontend-h8st.onrender.com",
    "https://e-commerce-admin-hftw.onrender.com"
]

// CORS Configuration
const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

// API Routes
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)

// Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
    connectDb()
})

