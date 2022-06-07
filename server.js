const express = require("express");
const app = express(); // this allows us to access everything express offers
const PORT = 8000;

const tea = {
  oolong: {
    type: "black",
    origin: "japan",
    waterTemp: 200,
    steepTimeSeconds: 180,
    caffeinated: true,
    flavor: "delicious",
  },
  unknown: {
    type: "unknown",
    origin: "unknown",
    waterTemp: 0,
    steepTimeSeconds: 0,
    caffeinated: false,
    flavor: "unknown",
  },
  green: {
    type: "green",
    origin: "japan",
    waterTemp: 210,
    steepTimeSeconds: 150,
    caffeinated: true,
    flavor: "nutty",
  },
};

// server will listen for this... so we want to send the user something when they load the page
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html"); // serves up the html file
});

// send some JSON using the tea object
app.get("/api/:name", (request, response) => {
  const teaName = request.params.name.toLowerCase();
  if (tea[teaName]) {
    response.json(tea[teaName]);
  } else {
    response.json(tea["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  // our PORT won't always be 8000... so "process.env.PORT" will allow us to use someone else's port (ex: Heroku) otherwise we can use our own which is 8000
  console.log(`The server is running on port ${PORT}! Betta Go Catch It!`);
});
