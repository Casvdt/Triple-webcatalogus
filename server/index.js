import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

const port = 3001;

app.use(cors());

app.use(express.static('public'))




app.get("/games", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/epicgames", (req, res) => {
  res.setHeader("content-type", "application/json;charset=UTF-8");
  fs.readFile("epic.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(data);
  });

    });
    app.get("/formula1", (req, res) => {
      res.setHeader("content-type", "application/json;charset=UTF-8");
      fs.readFile("formula1.json", "utf8", (err, data) => {
          if (err) {
              console.error(err);
              res.status(500).send('Internal Server Error');
              return;
          }
          res.send(data);
      });
        });
        app.get("/riot", (req, res) => {
          res.setHeader("content-type", "application/json;charset=UTF-8");
          fs.readFile("riot.json", "utf8", (err, data) => {
              if (err) {
                  console.error(err);
                  res.status(500).send('Internal Server Error');
                  return;
              }
              res.send(data);
          });
            });
app.get("/formula1", (req, res) => {
  res.setHeader("content-type", "application/json;charset=UTF-8");
  fs.readFile("formula1.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(data);
  });
});


