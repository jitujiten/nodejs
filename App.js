// const http = require("http");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/") {
//     res.write("<Html>");
//     res.write("<body>");
//     res.write(
//       "<form action='/message' method='POST'><input/><button>click</button></form>"
//     );
//     res.write("</body>");
//     res.write("</Html>");
//     return res.end();
//   }
//   res.setHeader("content-type", "text/html");
//   res.write("<Html>");
//   res.write("<body>");
//   res.write("<h1>message</h1>");
//   res.write("</body>");
//   res.write("</Html>");
//   res.end();
// });

// server.listen(2000);




const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.write("<Html>");
    res.write("<body>");
    res.write(
      "<h1>Home</h1>"
    );
    res.write("</body>");
    res.write("</Html>");
    return res.end();
  }
  if (url === "/about") {
    res.write("<Html>");
    res.write("<body>");
    res.write(
      "<h1>About</h1>"
    );
    res.write("</body>");
    res.write("</Html>");
    return res.end();
  }
  res.setHeader("content-type", "text/html");
  res.write("<Html>");
  res.write("<body>");
  res.write("<h1>Welcome to node.js</h1>");
  res.write("</body>");
  res.write("</Html>");
  res.end();
});

server.listen(4000);
