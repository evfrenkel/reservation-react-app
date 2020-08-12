const express = require("express");
const app = express();
const port = 3001;

app.get("/api/reservations", (req, res) => {
  res.send([
    {
      confirmationCode: "AAAAAA",
      checkInDate: "2020-02-10",
      checkOutDate: "2020-02-14",
      city: "San Francisco, CA",
      rating: null,
      cityImage:
        "https://cdn.pixabay.com/photo/2013/11/13/21/14/san-francisco-210230_960_720.jpg",
    },
    {
      confirmationCode: "BBBBBB",
      checkInDate: "2020-03-10",
      checkOutDate: "2020-03-14",
      city: "Los Angeles, CA",
      rating: 3,
      cityImage:
        "https://cdn.pixabay.com/photo/2016/10/25/12/28/los-angeles-1768743_960_720.jpg",
    },
    {
      confirmationCode: "CCCCCC",
      checkInDate: "2020-04-10",
      checkOutDate: "2020-04-14",
      city: "New York City, NY",
      rating: 5,
      cityImage:
        "https://cdn.pixabay.com/photo/2016/01/19/18/00/city-1150026_960_720.jpg",
    },
  ]);
});

app.get("/api/reservation/AAAAAA", (req, res) => {
  res.send({
    confirmationCode: "AAAAAA",
    checkInDate: "2020-02-10",
    checkOutDate: "2020-02-14",
    city: "San Francisco, CA",
    rating: null,
    cityImage:
      "https://cdn.pixabay.com/photo/2013/11/13/21/14/san-francisco-210230_960_720.jpg",
  });
});

app.get("/api/reservation/BBBBBB", (req, res) => {
  res.send({
    confirmationCode: "BBBBBB",
    checkInDate: "2020-03-10",
    checkOutDate: "2020-03-14",
    city: "Los Angeles, CA",
    rating: 3,
    cityImage:
      "https://cdn.pixabay.com/photo/2016/10/25/12/28/los-angeles-1768743_960_720.jpg",
  });
});

app.get("/api/reservation/CCCCCC", (req, res) => {
  res.send({
    confirmationCode: "CCCCCC",
    checkInDate: "2020-04-10",
    checkOutDate: "2020-04-14",
    city: "New York City, NY",
    rating: 5,
    cityImage:
      "https://cdn.pixabay.com/photo/2016/01/19/18/00/city-1150026_960_720.jpg",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
