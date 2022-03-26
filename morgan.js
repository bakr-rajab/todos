const express = require("express");

const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
// morgan(":method :url :status :res[content-length] - :response-time ms");
app.use(
    morgan(":method :status :param :res[content-length] - :response-time ms")
);

morgan.token("param", function(req, res, param) {
    return req.params[param];
});

app.get("/:id", (req, res) => {
    res.json({ message: req.params.id });
});
app.listen(8080, () => {
    console.log("Server listening on port :8080");
});