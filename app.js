const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Définir EJS comme moteur de templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servir les fichiers statiques (CSS, images...)
app.use(express.static(path.join(__dirname, "resources")));

// Route principale (page d'accueil)
app.get("/", (req, res) => {
  res.render("index", { title: "Bienvenue chez Planetapax !" });
});

// Lancement de l'app
app.listen(PORT, () => {
  console.log("Application Node.js en écoute sur le port " + PORT);
});

app.use((err, req, res, next) => {
  console.error("Erreur attrapée :", err.stack);
  res.status(500).send(`<pre>Erreur serveur :\n${err.stack}</pre>`);
});

module.exports = app;
