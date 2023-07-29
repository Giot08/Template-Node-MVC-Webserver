import express from "express";
import authRoutes from "./routes/auth.routes.js";
import db from "./config/db.config.js"

// Main()
const app = express();
const port = 3000;
try {
  await db.authenticate();
  console.log(`DB connected`)
} catch (error) {
  console.error(error)
}

// Template Engine
app.set("view engine", "pug");
app.set("views", "./views");

// public
app.use(express.static('public'));

//Routes
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server working in port: ${port}`);
});
