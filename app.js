const http = require("http");

const {
  mainRouteController,
  gameRouteController,
  voteRouteController,
  defaultRouteController,
} = require("./controllers");

const staticFile = require("./appModules/http-utils/static-file");
const mimeTypes = require("./appModules/http-utils/mime-types");

const PORT = 3005;

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
});

server.listen(PORT);

module.exports = mainRouteController;
module.exports = gameRouteController;
module.exports = voteRouteController;
module.exports = defaultRouteController;
module.exports = staticFile;
module.exports = mimeTypes;
