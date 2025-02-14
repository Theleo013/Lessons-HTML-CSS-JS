import jsonServer from "json-server";
import path from "path";

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json")); // db.json dosyasını belirtiyoruz
const middlewares = jsonServer.defaults();

// routes.json dosyasını kullanarak özelleştirilmiş rotaları ekliyoruz
server.use(jsonServer.rewriter(require("./routes.json")));

server.use(middlewares);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
