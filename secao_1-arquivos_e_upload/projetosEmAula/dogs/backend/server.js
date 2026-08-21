import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/dog", async(req, res) => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dados = await response.json();

  res.json(dados);
});

// const port = 3000;

process.on('uncaughtException', (err) => {
  console.error('Erro não tratado:', err);
});   

app.listen(3001, () => {
  console.log(`servidor rodando em http://localhost:3001`);
});
