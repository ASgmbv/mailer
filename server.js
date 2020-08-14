const ex = require("express");
const app = ex();
const cors = require("cors");
const path = require("path");

app.use(ex.static("client/build"));
app.use(cors());
app.use(ex.json());

app.get("*", (req, res) => {
   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const server = app.listen(5000, () => {
   console.log(`App running on port 5000...`);
});
