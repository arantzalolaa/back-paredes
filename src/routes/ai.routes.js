const express = require("express");
const router = express.Router();
const { generarTexto } = require("../services/gemini.service");

router.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;

    const respuesta = await generarTexto(prompt);

    res.json({ reply: respuesta });
  } catch (error) {
    res.status(500).json({ error: "Error con Gemini" });
  }
});

module.exports = router;