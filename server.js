const express = require("express");
const path = require("path");
const app = express();
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);

app.listen(3000, () => {
  console.log("Servidor está rodando na porta 3000");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  const os = require("os");
  const interfaces = os.networkInterfaces();
  let localIP = "localhost";
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        localIP = iface.address;
        break;
      }
    }
  }

  console.log(`\n✅ Servidor rodando!\n`);
  console.log(`📱 Local: http://localhost:${PORT}`);
  console.log(`🌐 Network: http://${localIP}:${PORT}\n`);
});
