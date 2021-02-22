import express from 'express';


const app = express();


app.get("/", (req,res) => res.json({message: "Hello World - NLW04"}));

app.post("/", (req,res) => res.json({message: "Os dados foram salvos com sucesso!"}))

app.listen(3333, () => console.log("Server is running"));