const homeRoute = (req, res) => {
  res.send("Makoto Hirata");
};

const hannahRoute = (req, res) => {
  res.send("Hannah Birch");
};

module.exports = {
    homeRoute,
    hannahRoute,
}