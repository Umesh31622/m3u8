const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ✅ Proper CORS config
app.use(cors({
  origin: "http://localhost:3000", // apna frontend URL daalo
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/banner", require("./routes/bannerRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

const PORT = process.env.PORT || 9003;

app.listen(PORT, () => console.log(`Server running on ${PORT} 🚀`));
