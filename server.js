const express = require("express");
const app = express();
const PORT = 8000;

const coffee = {
  dark: {
    origin: "sumatra",
    flavorProfile: ["chocolate", "caramel"],
    caffeineLevel: "low",
  },
  medium: {
    origin: "kenya",
    flavorProfile: ["floral", "cherry"],
    caffeineLevel: "medium",
  },
  light: {
    origin: "ethiopia",
    flavorProfile: ["vanilla", "citrus"],
    caffeineLevel: "high",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const coffeeName = request.params.name.toLowerCase();
  if (coffee[coffeeName]) {
    response.json(coffee[coffeeName]);
  } else {
    response.json(coffee["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! Betta Go Catch It!`);
});
