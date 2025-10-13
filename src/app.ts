import express, { Application } from "express";
import helloRoute from "./routes/hello";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", helloRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
