import http from "http";
import fs from "fs/promises";
import path from "path";

const PORT = 5678;
const PUBLIC_DIR = process.cwd();

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".svg": "image/svg+xml",
};

const server = http.createServer(async (req, res) => {
  try {
    const url = req.url === "/" ? "/index.html" : req.url;
    // Prevent directory traversal
    const safePath = path.normalize(url).replace(/^(\.\.(\/|\\|$))+/, "");
    const filePath = path.join(PUBLIC_DIR, safePath);

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || "application/octet-stream";

    const content = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf-8");
  } catch (error) {
    if (error.code === "ENOENT") {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>", "utf-8");
    } else {
      res.writeHead(500);
      res.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
