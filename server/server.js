const express = require("express");
const pdfGenerator = require("./lib/pdfGenerator");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios").default;

const server = express();
const port = 5000;

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Set up View Engine
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");

server.post("/create-pdf", async (req, res) => {
  const fileName = `${req.body.name.replace(/\s+/g, "-")}-consent`;
  const response = await axios.get("http://localhost:5000/consent-form", {
    params: {
      name: req.body.name,
      date: req.body.date,
      signature: req.body.signature,
    },
  });
  const renderedHTML = response.data;
  const pdf = await pdfGenerator(renderedHTML, fileName);
  res.json({
    status: `PDF Successfully generated at ${fileName}.pdf`,
    path: pdf,
  });
});

server.get("/consent-form", async (req, res) => {
  res.render("consent-form", {
    name: req.query.name,
    date: req.query.date,
    signature: req.query.signature,
  });
});

// eslint-disable-next-line import/prefer-default-export
try {
  server.listen(port, () => {
    // console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  // console.error(`Error occured: ${error.message}`);
}
