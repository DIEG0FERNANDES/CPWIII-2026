import { Router } from "express";
import app from "../app";

const router = Router;

app.get("/", (req, res) => {
  res.send("Seja bem vindo! Este é o servidor backend funcionando");
});
// app.get("/aluno", (req, res) => {
//   res.send("rota ok");
// });
// app.get("/aluno/:a/:b", (req, res) => {
//   const a = Number(req.params.a);
//   const b = Number(req.params.b);
//   const resultado = a + b;
//   res.send(`O resultado é, ${resultado}`);
// });

export default router;
