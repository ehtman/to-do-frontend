
import express from "express";
import dotenv from "dotenv";
import dns from "node:dns";
import cors from "cors"
import connectDB from "./config/db.js";
import taskRoutes from "./routes/task.route.js";

// DNS workaround: retain this if your MongoDB SRV
// lookup still fails with your normal DNS resolver.
dns.setServers(["8.8.8.8"]);

// Load environment variables
dotenv.config();

// Create Express application
const app = express();
app.use(cors());
// Middleware: JSON data ko req.body mein read karna
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to my Express Server!");
});

// To-Do routes
app.use("/todo", taskRoutes);

// Start server after connecting to MongoDB
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();
