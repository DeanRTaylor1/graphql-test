const express = require("express");
const Database = require("./db/db");

const app = express();

app.use(express.json());

app.post("/user", async (req, res, next) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !lastName || !email) {
    const err = new Error("Missing Paramaters");
    return next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: "Something went wrong" });
});

app.get("*", async (req, res) => {
  res.status(404).send({ message: "404 Page not found" });
});

app.set("port", 3000);

app.listen(app.get("port"), async () => {
  try {
    console.log("connecting to Database");
    await Database.sync();
    console.log("Connected to sqllite");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Server listening on port 3000");
  }
});
console.log("test");
