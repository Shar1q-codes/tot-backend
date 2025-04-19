const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const allowedOrigins = ["https://jade-torrone-fb6ab1.netlify.app"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
