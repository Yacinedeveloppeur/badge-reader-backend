//import http package and express app
const http = require("http");
const app = require("./app");

//convert port value to a integer or return false
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

//get port value
const port = normalizePort(process.env.PORT || "3000");
//set app port
app.set("port", port);

//handle error
const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

//create server
const server = http.createServer(app);

//listen error event and run error handler
server.on("error", errorHandler);

//listen listening event (on start) and send a log with the port value.
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

//start server
server.listen(port);
