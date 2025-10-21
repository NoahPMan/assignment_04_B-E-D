import express from "express";
import loanRoutes from "./api/v1/routes/loanRoutes";

const app = express();

app.use(express.json());
app.use("/api/v1/loans", loanRoutes);

export default app;