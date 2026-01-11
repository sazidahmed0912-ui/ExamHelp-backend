require("dotenv").config({ path: "./backend/.env" });

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(express.json());

// Dynamic CORS using Render environment variables
const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.CLIENT_PREVIEW_URL,
  "https://exam-help-seven.vercel.app",
  "https://exam-help-k1nllaj5z-sazid-ahmeds-projects.vercel.app",
  "https://exam-help-git-main-sazid-ahmeds-projects.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/orders", require("./routes/order"));
app.use("/api/pdf", require("./routes/pdf"));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));
const path = require("path");

// Frontend serve karo
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
