const http = require("http");
const express = require("express");
const morgan = require("morgan");
const expressHandlebars = require("express-handlebars");
const routes = require("./routes/index.routes.js");
const helmet = require("helmet");
const HTTP_PORT_NUMBER = process.env.port || 3001;

const app = express();

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.use(morgan("dev"));
app.use("/", routes);

// app.use(helmet.frameguard({ action: "deny" }));
app.use(express.static("public"));

const server = http.createServer(app);
server.listen(HTTP_PORT_NUMBER, function () {
  console.log(`Server started on port: ${server.address().port}`);
});
