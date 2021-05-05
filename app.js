// step 1 : require dependencies
const express = require("express");
const hbs = require("hbs");

// step 2 : base setup
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// step 3 : routes handling
app.get("/", (request, response, next) => {
    response.render("home.hbs");});

app.get("/about", (request, response, next) => {
        response.render("about.hbs");
        let title = "work";
    });

app.get("/work", (req, response) => {
  response.render("work.hbs");
  let title = "work";
});


// step 4 : app listen to kickstart
app.listen(3000);
