import express from "express";
import cors from "cors";

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World" });
});
app.get("/", (req, res) => {
  res.json({ message: "This is the main page of the application." });
});
app.get("/api/hello/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello ${name}` });
});
app.get("/api/hello/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res.json({ message: `Hello ${name}, you are ${age} years old` });
});
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${port}`);
});
