import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Seja bem vindo! Este é o servidor backend funcionando");
});

export default app;
