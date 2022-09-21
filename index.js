const server = require("./src/app");

server.listen(process.env.PORT, () => {
  console.log("%s listening at " + process.env.PORT);
}); // Cierra el server.listen
