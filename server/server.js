const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const bodyParser = require("body-parser")
const subjectRouter = require("./routes/subject");
const subjectsRouter = require("./routes/subjects");
const probaRouter = require("./routes/proba");

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({"name": "Marko"});
    console.log(dataProba);
});

app.use("/subject", subjectRouter);
app.use("/subjects", subjectsRouter);
app.use("/proba", probaRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});