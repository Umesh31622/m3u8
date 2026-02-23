const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ✅ Allow localhost frontend
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));



app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/banner", require("./routes/bannerRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));


// Test route
app.get("/", (req, res) => {
  res.send("API Running on Render 🚀");
});

const PORT = process.env.PORT || 9003;

app.listen(PORT, () => console.log(`Server running on ${PORT} 🚀`));
