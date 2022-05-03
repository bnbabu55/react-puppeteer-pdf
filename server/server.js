const express = require("express");
const pdfGenerator = require("./lib/pdfGenerator");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();
const port = 5000;

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Set up View Engine
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");

server.post("/create-pdf", async (req, res) => {
  // const fileName = `${__dirname}/forms/${Date.now()}/${req.body.name.replace(
  //   /\s+/g,
  //   "-"
  // )}-consent`;

  const fileName = `${req.body.name.replace(/\s+/g, "-")}-consent`;
  server.locals.name = req.body.name;
  server.locals.date = req.body.date;
  server.locals.signature = req.body.signature;
  const pdf = await pdfGenerator(
    "http://localhost:5000/consent-form",
    fileName
  );
  res.json({
    status: `PDF Successfully generated at ${fileName}.pdf`,
    path: pdf,
  });
});

server.get("/consent-form", async (req, res) => {
  res.render("consent-form", {
    name: server.locals.name,
    date: server.locals.date,
    signature: server.locals.signature,
  });
});

// eslint-disable-next-line import/prefer-default-export
try {
  server.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
