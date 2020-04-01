const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

// MIDDLEWARE
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

// PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
