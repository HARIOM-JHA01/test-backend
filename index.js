import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/db.js";
import UserRoutes from "./routes/user.routes.js";
const app = express();
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(express.json());
app.use("/api/users", UserRoutes);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
