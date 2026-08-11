import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Seja bem vindo! Este é o servidor backend funcionando");
});

router.get("/aluno", (req, res) => {
  res.send("rota ok");
});

router.get("/aluno/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a + b;
  res.send(`O resultado é, ${resultado}`);
});

export default router;
