// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// El código de abajo crea un endpoint para la ruta /api.

// Si nuestra app realiza una petición GET a esa ruta, respondemos (usando res, que significa respuesta) con nuestros datos JSON:

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});