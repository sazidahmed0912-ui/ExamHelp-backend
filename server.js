require("dotenv").config({ path: "./backend/.env" });

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(express.json());

app.use(cors({
  origin: [
    "https://exam-help-seven.vercel.app",
    "https://exam-help-ompq6jsln-sazid-ahmeds-projects.vercel.app"
  ],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));


// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/orders", require("./routes/order"));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));
